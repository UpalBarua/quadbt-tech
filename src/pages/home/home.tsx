import ShowCard from '../../components/ShowCard/ShowCard';
import { MdMovieFilter } from 'react-icons/md';
import useShows from '../../hooks/useShows';
import styles from './home.module.scss';

const Home = () => {
  const { shows, isLoading, isError } = useShows();

  return (
    <main className={styles.home}>
      <h1 className={styles.title}>
        <MdMovieFilter size={35} color={'hsl(345, 79%, 54%)'} />
        <span>TV Shows</span>
      </h1>
      <ul className={styles.shows}>
        {shows.map(({ show }: { show: Show }) => (
          <ShowCard key={show.id} {...show} />
        ))}
      </ul>
    </main>
  );
};

export default Home;
