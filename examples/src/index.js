import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import {PopupMenu, PopupTable} from 'react-rectangle-popup-menu';

import 'font-awesome/css/font-awesome.css';

const Application = () => (
  <div className="centered">
    <PopupMenu width={100} height={300}>
      <PopupTable rowItems={2}>
        <FontAwesome name="rocket" size="2x" />
        <FontAwesome name="rocket" size="2x" />
        <FontAwesome name="rocket" size="2x" />
        <FontAwesome name="rocket" size="2x" />
        <FontAwesome name="rocket" size="2x" />
        <FontAwesome name="rocket" size="2x" />

        <FontAwesome name="rocket" size="2x" />
        <FontAwesome name="rocket" size="2x" />
        <FontAwesome name="rocket" size="2x" />
        <FontAwesome name="rocket" size="2x" />
      </PopupTable>
    </PopupMenu>
  </div>
);

ReactDOM.render(
  <Application />,
  document.getElementById('app')
)
