import React, {Component} from 'react';

export class PopupText extends Component {
  render() {
    return (
      <div style={{padding: '3px 7px'}}>
        <span>{this.props.children}</span>
      </div>
    )
  }
}
