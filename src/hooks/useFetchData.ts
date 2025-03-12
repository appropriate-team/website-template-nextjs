import { useState, useEffect } from 'react';

type FetchFunction<T> = () => Promise<{ success: boolean; data: T } | any>;

interface UseFetchDataProps<T> {
  fetchFunction: FetchFunction<T>;
  dependencies?: any[];
  initialState?: T;
}

interface UseFetchDataReturn<T> {
  data: T;
  setData: React.Dispatch<React.SetStateAction<T>>;
  loading: boolean;
  error: string | null;
}

const useFetchData = <T>({
  fetchFunction,
  dependencies = [],
  initialState,
}: UseFetchDataProps<T>): UseFetchDataReturn<T> => {
  const [data, setData] = useState<T>(initialState as T);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchFunction();
        if (res?.success) {
          setData(res.data);
        } else {
          setError(res?.message || 'Server Error: Failed to fetch');
        }
      } catch (err: any) {
        setError(err?.message || 'Unexpected Error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, setData, loading, error };
};

export default useFetchData;
