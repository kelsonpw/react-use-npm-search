import { useEffect, useState } from 'react';
import dlv from 'dlv';

const fetchPath = path =>
  fetch(`https://api.npms.io/v2/search?q=${path}`).then(res => res.json());

const cache = {};
const delve = path => obj => dlv(obj, path);

function usePackageSearch({ term, fields, amount }) {
  const path = term.toLowerCase().replace(/ /g, '+');
  const [data, setData] = useState(cache[path]);

  const parse = items =>
    items.slice(0, amount || 10).map(delve('package.' + fields.join('.')));

  useEffect(() => {
    if (!cache[path]) {
      fetchPath(path).then(response => {
        cache[path] = parse(response.results);
        setData(cache[path]);
      });
    } else {
      setData(cache[path]);
    }
  }, [path]);

  return data;
}

export default usePackageSearch;
