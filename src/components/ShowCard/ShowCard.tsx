import { AiFillClockCircle, AiFillStar } from 'react-icons/ai';
import { MdLanguage } from 'react-icons/md';
import { Link } from 'react-router-dom';
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
      <img src={image?.original} alt={name} />
      <h2>{name}</h2>
      <p>{premiered}</p>
      <ul>
        <li>
          <AiFillStar />
          <span>{rating.average}</span>
        </li>
        <li>
          <AiFillClockCircle />
          <span>{runtime}</span>
        </li>
        <li>
          <MdLanguage />
          <span>{language}</span>
        </li>
      </ul>
      <p>{summary}</p>
      <Link className={styles.link} to={`/shows/${id}`}>
        Details
      </Link>
    </li>
  );
};

export default ShowCard;
