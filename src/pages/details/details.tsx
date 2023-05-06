import { useParams } from 'react-router-dom';
import useDetails from '../../hooks/useDetails';
import styles from './Details.module.scss';

const Details = () => {
  const { id } = useParams();
  const { details } = useDetails(id);

  return <div>{details.name}</div>;
};

export default Details;
