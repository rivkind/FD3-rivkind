"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import Spinner from '../components/Spinner/Spinner';

test('работа Spinner', () => {

  const component = renderer.create(
    <Spinner />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
    
});
