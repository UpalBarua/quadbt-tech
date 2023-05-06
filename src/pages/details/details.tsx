import { Link, useParams } from 'react-router-dom';
import useDetails from '../../hooks/useDetails';
import { format } from 'date-fns';
import styles from './details.module.scss';
import { AiFillClockCircle, AiFillStar } from 'react-icons/ai';
import { MdLanguage } from 'react-icons/md';
import { BiLinkExternal } from 'react-icons/bi';
import parse from 'html-react-parser';
import { BsBookmark } from 'react-icons/bs';
import BookingModal from '../../components/BookingModal/BookingModal';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import { Waveform } from '@uiball/loaders';

const Details = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();

  const { details, isLoading, isError } = useDetails(id || '');

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
  } = details as Show;

  return (
    <main className={styles.details}>
      <Header />
      {isLoading && (
        <div className={styles.message}>
          <Waveform color="hsl(345, 79%, 54%)" size={50} />
        </div>
      )}
      {isError && (
        <div className={styles.message}>
          <p className={styles.errorMessage}>Failed to load shows</p>
        </div>
      )}
      {!isLoading && !isError && (
        <div className={styles.container}>
          <img className={styles.image} src={image?.original} alt={name} />
          <div className={styles.body}>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.premiered}>
              {premiered && format(new Date(premiered), 'd MMMM yyyy')}
            </p>
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
            <ul className={styles.genres}>
              {genres?.map((genre: string, index: number) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
            {summary && parse(summary)}
            <div className={styles.btnGroup}>
              <button
                className={styles.bookBtn}
                onClick={() => setIsModalOpen(true)}>
                <BsBookmark />
                <span>Book</span>
              </button>
              <Link
                className={styles.watchBtn}
                to={network?.officialSite}
                target="_blank">
                <BiLinkExternal />
                <span>Watch Now</span>
              </Link>
            </div>
          </div>
          <BookingModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            show={details}
          />
        </div>
      )}
    </main>
  );
};

export default Details;
