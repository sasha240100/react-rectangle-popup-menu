import React from 'react';
import {PopupMenu, PopupTable} from '../build/rrpm.module';
import renderer from 'react-test-renderer';

test('PopupTable', () => {
  const component = renderer.create(
    <PopupMenu>
      <PopupTable rowItems={4}>
        <span key={1}>1</span>
        <span key={2}>2</span>
        <span key={3}>3</span>
        <span key={4}>4</span>
      </PopupTable>
    </PopupMenu>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
