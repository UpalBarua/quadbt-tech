import { AiFillClockCircle, AiFillStar } from 'react-icons/ai';
import { MdLanguage } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import parse from 'html-react-parser';
import styles from './ShowCard.module.scss';

const ShowCard = ({
  id,
  genres,
  image,
  language,
  name,
  rating,
  runtime,
  summary,
  premiered,
}: Show) => {
  return (
    <li className={styles.showCard}>
      <img className={styles.image} src={image?.original} alt={name} />
      <div className={styles.body}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.premiered}>
          {format(new Date(premiered), 'd MMMM yyyy')}
        </p>
        <ul className={styles.information}>
          {rating.average && (
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
        {summary && parse(summary.slice(0, 150) + '...')}
        <Link className={styles.link} to={`/shows/${id}`}>
          Details
        </Link>
      </div>
    </li>
  );
};

export default ShowCard;
