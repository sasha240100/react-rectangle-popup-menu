import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Dimensions from 'react-dimensions';

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
    const children = this.props.children.slice();

    const items = children.length % rowItems;

    while(children.length % rowItems !== 0) {
      children.push(
        React.cloneElement(children[children.length - 1])
      );
    }

    const width = this.context.popupWidth || 200;

    return (
      <div className={style.PopupTable} style={{width: `calc(${width}px - 10px)`}}>
        {children.map((child, i) => (
          <div className={i < children.length - items ? style.item : style.placeholder}>
            {child}
          </div>
        ))}
      </div>
    );
  }
}
