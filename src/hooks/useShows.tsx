import { useEffect, useState } from 'react';
import axios from 'axios';

const useShows = (search: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const { data } = await axios.get(
          `https://api.tvmaze.com/search/shows?q=${search ? search : 'all'}`
        );
        setIsLoading(false);
        setShows(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
    };

    fetchShows();
  }, [search]);

  return {
    shows,
    isLoading,
    isError,
  };
};

export default useShows;
