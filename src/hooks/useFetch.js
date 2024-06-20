import { useState, useEffect } from "react";

const useFetch = (url, options = {}) => {
  const [response, setResponse] = useState({
    data: null,
    error: null,
    loading: true,
  });
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  useEffect(() => {
    console.log(response);
  }, [response]);

  useEffect(() => {
    if (!url) return;

    const abortController = new AbortController();

    async function fetchData() {
      setResponse((prevResponse) => ({
        ...prevResponse,
        loading: true,
        error: null,
      }));
      try {
        const res = await fetch(url, {
          ...defaultOptions,
          ...options,
          signal: abortController.signal,
        });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await res.json();
        setResponse((prevResponse) => ({
          ...prevResponse,
          data: result,
          loading: false,
        }));
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setResponse((prevResponse) => ({
            ...prevResponse,
            error,
            loading: false,
          }));
        }
      }
    }

    fetchData();

    return () => {
      if (abortController) abortController.abort();
    };
  }, [url]);

  return response;
};

export default useFetch;
