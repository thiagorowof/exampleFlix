import React from 'react';
import renderer from 'react-test-renderer';
import { Link } from 'react-router-dom';
import { StaticRouter } from 'react-router'

test('Verify that the path to the about screen exists', () => {
  const context = {};
  const component = renderer.create(
    <StaticRouter location="/about" context={context}>
      <Link to="/about" />
    </StaticRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('Verify that the path to the questions screen exists', () => {
  const context = {};
  const component = renderer.create(
    <StaticRouter location="/questions" context={context}>
      <Link to="/questions" />
    </StaticRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});