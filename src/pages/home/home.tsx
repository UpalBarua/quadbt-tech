import { MdMovieFilter } from 'react-icons/md';
import styles from './home.module.scss';

const Home = () => {
  return (
    <main className={styles.home}>
      <h1 className={styles.title}>
        <MdMovieFilter size={35} color={'hsl(345, 79%, 54%)'} />
        <span>Movies</span>
      </h1>
      <ul className={styles.movies}></ul>
    </main>
  );
};

export default Home;
