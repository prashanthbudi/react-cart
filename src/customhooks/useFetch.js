import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [state, setstate] = useState({ data: null, loading: true });
  useEffect(() => {
    setstate((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        setstate({ data: y, loading: false });
      });
  }, [url]);

  return state;
};
