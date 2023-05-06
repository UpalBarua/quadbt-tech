import { FormEvent, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './BookingModal.module.scss';
import * as Dialog from '@radix-ui/react-dialog';

interface BookingModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  show: Show;
}

const BookingModal = ({
  isModalOpen,
  setIsModalOpen,
  show,
}: BookingModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleBooking = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const newBooking = {
      show,
      userName: name,
      email,
    };

    const bookedShows = JSON.parse(
      localStorage.getItem('bookedTvShows') || '[]'
    );

    if (
      !bookedShows.find(
        (bookedShow: { userName: string; email: string; show: Show }) =>
          bookedShow.show.id === show.id
      )
    ) {
      localStorage.setItem(
        'bookedTvShows',
        JSON.stringify([...bookedShows, newBooking])
      );
    }

    setName('');
    setEmail('');
    setIsModalOpen(false);
  };

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <div className={styles.header}>
            <Dialog.Title className={styles.title}>Book This Show</Dialog.Title>
            <button
              className={styles.closeBtn}
              onClick={() => setIsModalOpen(false)}>
              <AiOutlineClose />
            </button>
          </div>
          <form className={styles.form} onSubmit={handleBooking}>
            <fieldset className={styles.fieldset}>
              <label className={styles.label} htmlFor="name">
                Show Name
              </label>
              <input
                type="text"
                className={styles.input}
                id="name"
                value={show?.name}
              />
            </fieldset>
            <fieldset className={styles.fieldset}>
              <label className="Label" htmlFor="username">
                Your Name
              </label>
              <input
                type="text"
                className={styles.input}
                id="username"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </fieldset>
            <fieldset className={styles.fieldset}>
              <label className="Label" htmlFor="username">
                Email Address
              </label>
              <input
                type="email"
                className={styles.input}
                id="username"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </fieldset>
            <button className={styles.bookBtn} type="submit">
              Book
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default BookingModal;
