import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

import style from './PopupTable.scss';

const container = document.createElement('div');
container.style.position = 'absolute';
container.style.left = '-999999px';
document.body.appendChild(container);

const getSize = (element) => {
  const elementParent = document.createElement('div');
  container.appendChild(elementParent);

  return new Promise(resolve => {
    render(element, elementParent, () => {
      resolve({
        width: elementParent.firstChild.offsetWidth,
        height: elementParent.firstChild.offsetHeight
      });
    })
  });
}

export class PopupTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.sizes = [];
    this.wait = [];

    this.updateLayout();
  }

  updateLayout() {
    this.items = this.props.children.length % this.props.rowItems;

    this.children = this.props.children.map((component) => {
      this.wait.push(getSize(component));
      return React.cloneElement(component);
    });

    Promise.all(this.wait).then((sizes) => {
      this.sizes = sizes;
      this.forceUpdate();
    });
  }

  static defaultProps = {
    rowItems: 1
  };

  static contextTypes = {
    popupWidth: PropTypes.number
  };

  render() {
    const {rowItems} = this.props;
    const {children, sizes, items} = this;

    if (sizes.length < 1) return null;

    const width = this.context.popupWidth || 200;

    if (children.length % rowItems !== 0) {
      const contentSize = sizes
        .slice(-items)
        .reduce((size, {width}) => size + width + 10, 0);

      const margin = (width - rowItems * (contentSize / items)) / (rowItems);

      children.push(
        <div
          style={{
            width: (width - contentSize) - margin * rowItems
          }}
        ></div>
      );
    }

    console.log(items);

    return (
      <div
        className={style.PopupTable}
        style={{width: `calc(${width}px - 10px)`}}
      >
        {children.map((child, i) => (
          <div key={i} className={i === children.length - 1 && items > 0 ? style.placeholder : style.item}>
            {child}
          </div>
        ))}
      </div>
    );
  }
}
