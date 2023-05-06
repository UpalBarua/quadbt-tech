import { AiOutlineSearch } from 'react-icons/ai';
import styles from './Header.module.scss';
import { MdMovieFilter } from 'react-icons/md';

interface HeaderProps {
  search?: string;
  setSearch?: (search: string) => void;
}

const Header = ({ search, setSearch }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
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
      </div>
    </header>
  );
};

export default Header;
