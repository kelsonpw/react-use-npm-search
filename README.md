# react-use-npm-search

### 🙋‍♂️ Made by [@thekelsonwarner](https://twitter.com/thekelsonwarner)


[![npm version](https://badge.fury.io/js/react-use-npm-search.svg)](https://badge.fury.io/js/react-use-npm-search)

A simple helpful hook for gathering and searching for npm packages.

## Install

```bash
yarn add react-hanger
```

## Usage

```jsx
import React from 'react';
import useNpmSearch from 'react-use-npm-search';

function App() {
  const [value, setValue] = React.useState('react');
  const results = useNpmSearch({
    term: value,
    fields: ['name'],
    amount: 10,
  });
}

export default App;
```

### Example

[![Edit react-use-npm-search/example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/readmeexplorer-z61co?fontsize=14)
