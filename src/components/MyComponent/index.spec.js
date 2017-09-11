import React from 'react';
import renderer from 'react-test-renderer';

import MyComponent from './index';

describe('MyComponent', () => {
  it('should render correct markup', () => {
    const component = renderer.create(
      <MyComponent />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
