import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import {PopupMenu, PopupText} from 'react-rectangle-popup-menu';

import 'font-awesome/css/font-awesome.css';

const button = (<FontAwesome name="text-height" size="2x" />);

const Application = () => (
  <div className="centered">
    <PopupMenu width={190} direction="bottom" button={button}>
      <PopupText>Some text</PopupText>
    </PopupMenu>
  </div>
);

ReactDOM.render(
  <Application />,
  document.getElementById('app')
)
