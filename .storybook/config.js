import React from 'react';
import { configure, addDecorator } from '@storybook/react';

const req = require.context('../src', true, /.stories.js$/);

addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

console.log(configure(loadStories, module));
