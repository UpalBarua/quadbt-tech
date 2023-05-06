import { useEffect, useState } from 'react';
import axios from 'axios';

const useDetails = (id: number) => {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setIsLoading(false);
        setDetails(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
    };

    fetchDetails();
  }, [id]);

  return {
    details,
    isLoading,
    isError,
  };
};

export default useDetails;
