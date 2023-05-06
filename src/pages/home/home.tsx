import ShowCard from '../../components/ShowCard/ShowCard';
import { MdMovieFilter } from 'react-icons/md';
import useShows from '../../hooks/useShows';
import { Waveform } from '@uiball/loaders';
import styles from './home.module.scss';

const Home = () => {
  const { shows, isLoading, isError } = useShows();

  return (
    <main className={styles.home}>
      <h1 className={styles.title}>
        <MdMovieFilter size={35} color={'hsl(345, 79%, 54%)'} />
        <span>TV Shows</span>
      </h1>
      <section className={styles.showsContainer}>
        {isLoading && <Waveform color="hsl(345, 79%, 54%)" size={50} />}
        {isError && <p className={styles.errorMessage}>Failed to load shows</p>}
        <ul className={styles.shows}>
          {shows.map(({ show }: { show: Show }) => (
            <ShowCard key={show.id} {...show} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
