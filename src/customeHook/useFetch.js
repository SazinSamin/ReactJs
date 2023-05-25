import { useState, useEffect } from "react";

export default function useFetch(url) {
  
  const [data, setTodos] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setTodos(json);
      setisLoading(false);
    } catch (e) {
      setError(e.message);
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
}
