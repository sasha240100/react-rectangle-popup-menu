import React, {Component} from 'react';
import PropTypes from 'prop-types';
import getRenderedSize from 'react-rendered-size';

import style from './PopupTable.scss';

export class PopupTable extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static contextTypes = {
    popupWidth: PropTypes.number
  };

  render() {
    const {rowItems} = this.props;
    const sizes = [];

    const children = this.props.children.map((component) => {
      sizes.push(getRenderedSize(component));
      return React.cloneElement(component);
    });

    const items = children.length % rowItems;
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

    return (
      <div
        className={style.PopupTable}
        style={{width: `calc(${width}px - 10px)`}}
      >
        {children.map((child, i) => (
          <div key={'wrapper_' + i} className={i == children.length - 1 && items > 0 ? style.placeholder : style.item}>
            {child}
          </div>
        ))}
      </div>
    );
  }
}
