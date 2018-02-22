import React from 'react';
import {PopupMenu} from '../build/rrpm.module';
import renderer from 'react-test-renderer';

describe('PopupMenu', () => {
  const component = renderer.create(
    <PopupMenu />
  );

  let tree;

  it('should render correctly', () => {
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Hover button
  it('should respond to mouse hover', () => {
    tree.children[0].props.onMouseOver();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Unhover button
  it('should respond to mouse unhover', () => {
    tree.children[0].props.onMouseOut();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
