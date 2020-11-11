import useFetch from 'use-http';
import { useEffect, useState } from 'react';

const useSearch = ({ payload, type }) => {
  const [data, setData] = useState([]);
  const {
    get,
    response,
    loading,
    error,
  } = useFetch(`${process.env.REACT_APP_BACKEND}`, { cors: 'no-cors' });

  useEffect(() => {
    load();
  }, [payload]);

  const load = async () => {
    const newData = await get(`/${type}/${payload}`);
    console.log({ newData });
    if (response.ok) setData(newData);
  };

  return [loading, error, data];
};

export { useSearch as default };
