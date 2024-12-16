import { useEffect, useState } from 'react';

const API_URL = 'https://restcountries.com/v3.1/all?fields=name,flags';

/**
 * Custom hook para obtener la lista de países con sus nombres y banderas.
 * @returns {Array} Un array con data, error y loading.
 */
const getCountries = () => {
  const [data, setData] = useState<Array<any>>([]);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Error al obtener los países: ' + response.statusText);
        }
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError('Error: ' + err?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []); // Solo se ejecuta al montar el componente

  return {data, error, loading}; // Retorna un array con data, error y loading
};

export default getCountries;