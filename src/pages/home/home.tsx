import { useState } from 'react';
import ShowCard from '../../components/ShowCard/ShowCard';
import Header from '../../components/Header/Header';
import useShows from '../../hooks/useShows';
import { Waveform } from '@uiball/loaders';
import styles from './home.module.scss';

const Home = () => {
  const [search, setSearch] = useState('');
  const { shows, isLoading, isError } = useShows(search);

  return (
    <main className={styles.home}>
      <Header search={search} setSearch={setSearch} />
      <section className={styles.showContainer}>
        {isLoading && <Waveform color="hsl(345, 79%, 54%)" size={50} />}
        {isError && <p className={styles.errorMessage}>Failed to load shows</p>}
        {!isLoading && !isError && (
          <ul className={styles.shows}>
            {shows.map(({ show }: { show: Show }) => (
              <ShowCard key={show.id} {...show} />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default Home;
