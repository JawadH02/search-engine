import React, { useState, useEffect } from "react";
import { API_KEY } from "../api/keys";

const CONTEXT_KEY = "c9a6c8356df983b28";

export const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  };

  useEffect(() => {
    fetchData();
  }, [term]);

  return { data }
};
