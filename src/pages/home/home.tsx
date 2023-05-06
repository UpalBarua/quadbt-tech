import ShowCard from '../../components/ShowCard/ShowCard';
import { MdMovieFilter } from 'react-icons/md';
import useShows from '../../hooks/useShows';
import { Waveform } from '@uiball/loaders';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './home.module.scss';
import { useState } from 'react';

const Home = () => {
  const [search, setSearch] = useState('');
  const { shows, isLoading, isError } = useShows(search);

  return (
    <main className={styles.home}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <MdMovieFilter size={35} color={'hsl(345, 79%, 54%)'} />
          <span>TV Shows</span>
        </h1>
        <form className={styles.searchBar}>
          <AiOutlineSearch />
          <input
            className={styles.input}
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </header>
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
