import { useEffect, useState } from 'react';
import axios from 'axios';

const useShows = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const { data } = await axios.get(
          'https://api.tvmaze.com/search/shows?q=all'
        );
        setIsLoading(false);
        setShows(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
    };

    fetchShows();
  }, []);

  return {
    shows,
    isLoading,
    isError,
  };
};

export default useShows;
