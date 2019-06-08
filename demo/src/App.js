/** @jsx jsx */

import React from 'react';
import {
  ComboboxOption,
  ComboboxList,
  Combobox,
  ComboboxInput,
  ComboboxPopover,
} from '@reach/combobox';
import { jsx, css } from '@emotion/core';
import usePackageSearch from 'react-use-npm-search';

function App() {
  const [value, setValue] = React.useState('react');
  const results = usePackageSearch({
    term: value,
    fields: ['name'],
    amount: 10,
  });

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}>
      <Combobox>
        <ComboboxInput onChange={evt => setValue(evt.target.value)} />
        {results && (
          <ComboboxPopover>
            <ComboboxList>
              {results.map((result, index) => (
                <ComboboxOption key={index} value={result} />
              ))}
            </ComboboxList>
          </ComboboxPopover>
        )}
      </Combobox>
    </div>
  );
}

export default App;
