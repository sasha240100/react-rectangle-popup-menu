import React from 'react';
import {PopupMenu, PopupText} from '../build/rrpm.module';
import renderer from 'react-test-renderer';

test('PopupTable', () => {
  const component = renderer.create(
    <PopupMenu>
      <PopupText>Test</PopupText>
    </PopupMenu>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
