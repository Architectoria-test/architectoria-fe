import { useState, useEffect } from "react";

const useFetch = (props) => {
  const { url, options } = props;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    console.log(url);
    fetch(url, {
      ...options,
      // TODO: Add auth headers
    })
      .then((response) => response)
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return [data, loading, error];
};

export default useFetch;
