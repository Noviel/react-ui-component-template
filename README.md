# React UI Component Template

## bI?

Template for rapid development of React component/library as a standalone package.

## Features

- Modern JavaScript features (ES6+)
- Styling with SCSS and PostCSS
- The best developer experience with [Storybook](https://github.com/storybooks/storybook)
- Testing with Jest
- Building assets with Webpack

## Install

```sh
git clone git@github.com:Noviel/react-ui-component-template.git
```

## Quick start

1. Modify `package.json` corresponding to your project (`name`, `author`, `repository`, e.t.c)
1. Create your awesome component in `src/components/MyAwesomeComponent`
1. `yarn storybook` to launch storybook
1. Write some tests
1. `yarn lint`
1. `yarn test`
1. `yarn build` will produce built files `dist/index.js` and `dist/style.css`, which you can include in other projects:

```javascript
import React from 'react';
import { MyAwesomeComponent } from 'my-ui-lib/dist';
import 'my-ui-lib/dist/style.css';

console.log(<MyAwesomeComponent />);
```
