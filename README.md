# react-use-npm-search

### 🙋‍♂️ Made by [@thekelsonwarner](https://twitter.com/thekelsonwarner)


[![npm version](https://badge.fury.io/js/react-use-npm-search.svg)](https://badge.fury.io/js/react-use-npm-search)

A simple helpful hook for gathering and searching for npm packages.

This is a work in progress, and currently only returns a list of names.

## Install

```bash
yarn add react-use-npm-search
```

## Usage

```jsx
import React from 'react';
import useNpmSearch from 'react-use-npm-search';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('react');
  const results = useNpmSearch({
    term: searchTerm,
    amount: 10,
  });
}

export default App;
```

### Example

[![Edit react-use-npm-search/example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/readmeexplorer-z61co?fontsize=14)
