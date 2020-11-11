import useFetch from 'use-http';
import { useEffect, useState } from 'react';

const useMovieData = () => {
  /*
  const [data, setData] = useState([]);
  const {
    get,
    response,
    loading,
    error,
  } = useFetch(`${process.env.REACT_APP_BACKEND}`, { cors: 'no-cors' });

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    const initialData = await get('/movies');
    console.log({ initialData });
    if (response.ok) setData(initialData);
  };
*/
  const { loading, error, data = [] } = useFetch(
    `${process.env.REACT_APP_BACKEND}/movies`,
    { cors: 'no-cors', 'Access-Control-Allow-Origin': '*' },
    []
  );
  console.log({ error });
  const rows = [
    ...data.map(({ title, locations }) => {
      return {
        title,
        locations,
      };
    }),
  ];
  return [rows];
};

export { useMovieData as default };
