import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import {PopupMenu, PopupTable} from 'react-rectangle-popup-menu';

import 'font-awesome/css/font-awesome.css';

const button = (<FontAwesome name="rocket" size="2x" />);

const Application = () => (
  <div className="centered">
  <PopupMenu width={190} direction="bottom" button={button}>
    <PopupTable rowItems={4}>
      <FontAwesome name="google-plus-square" size="2x" />
      <FontAwesome name="twitter-square" size="2x" />
      <FontAwesome name="google" size="2x" />
      <FontAwesome name="google" size="2x" />

      <FontAwesome name="facebook-official" size="2x" />
      <FontAwesome name="twitter-square" size="2x" />
      <FontAwesome name="spotify" size="2x" />
      <FontAwesome name="twitter-square" size="2x" />

      <FontAwesome name="google-plus-square" size="2x" />
      <FontAwesome name="google" size="2x" />
      <FontAwesome name="twitter-square" size="2x" />
    </PopupTable>
  </PopupMenu>
  </div>
);

ReactDOM.render(
  <Application />,
  document.getElementById('app')
)
