/** @jsx jsx */
import React from "react";
import {
  ComboboxOption,
  ComboboxList,
  Combobox,
  ComboboxInput,
  ComboboxPopover
} from "@reach/combobox";
import { jsx, css } from "@emotion/core";
import { usePackageSearch } from "./";
import ReactDOM from "react-dom";

function App() {
  const [value, setValue] = React.useState("");
  const results = usePackageSearch(value);
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
