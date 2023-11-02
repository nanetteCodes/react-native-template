// Usage:   const { data, isPending, error } = useFetch(url);

import {useState, useEffect} from 'react';

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export const useFetch = <T,>(url: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json: T = await response.json();
        setIsLoading(false);
        setData(json);
        setError(null);
      } catch (err) {
        setError(`${err} Could not Fetch Data`);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {data, isLoading, error};
};
