import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();

      if (!response.ok) throw new Error(json.message || "Erro na requisição");

      setData(json);
      return { response, json };
    } catch (err) {
      setError(err.message);
      return { response: null, json: null };
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useFetch;
