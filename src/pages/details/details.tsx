import { Link, useParams } from 'react-router-dom';
import useDetails from '../../hooks/useDetails';
import { format } from 'date-fns';
import styles from './Details.module.scss';
import { AiFillClockCircle, AiFillStar } from 'react-icons/ai';
import { MdLanguage, MdNetworkCell } from 'react-icons/md';
import { BiLinkExternal } from 'react-icons/bi';
import parse from 'html-react-parser';

const Details = () => {
  const { id } = useParams();

  const { details, isLoading, isError } = useDetails(id);

  const {
    genres,
    image,
    language,
    name,
    rating,
    runtime,
    summary,
    premiered,
    network,
  } = details;

  return (
    <main className={styles.details}>
      <img className={styles.image} src={image?.original} alt={name} />
      <div className={styles.body}>
        <h2 className={styles.name}>{name}</h2>
        <p>{premiered && format(new Date(premiered), 'd MMMM yyyy')}</p>
        <ul className={styles.information}>
          {rating?.average && (
            <li>
              <AiFillStar color="hsl(35, 70%, 50%)" />
              <span>{rating.average}</span>
            </li>
          )}
          {runtime && (
            <li>
              <AiFillClockCircle color="hsl(165, 60%, 50%)" />
              <span>{runtime}m</span>
            </li>
          )}
          {language && (
            <li>
              <MdLanguage color="hsl(210, 50%, 50%)" />
              <span>{language}</span>
            </li>
          )}
        </ul>
        {summary && parse(summary)}
        <ul className={styles.genres}>
          {genres?.map((genre: string) => (
            <li>{genre}</li>
          ))}
        </ul>
        <Link className={styles.watchBtn} to={network?.officialSite}>
          <BiLinkExternal />
          <span>Watch On {network?.name}</span>
        </Link>
      </div>
    </main>
  );
};

export default Details;
