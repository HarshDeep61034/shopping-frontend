import { useEffect, useState } from 'react';

function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false); // Mark loading as false once the data is fetched
      })
      .catch(err => {
        console.error(err);
        setLoading(false); // Mark loading as false on error
      });
  }, [url]);

  return {
    data,
    loading,
  };
}

export default useFetchData;
