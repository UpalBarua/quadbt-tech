import { AiOutlineClose } from 'react-icons/ai';
import styles from './BookingModal.module.scss';
import * as Dialog from '@radix-ui/react-dialog';

const BookingModal = ({ isModalOpen, setIsModalOpen, showName }) => {
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
          <form className={styles.form}>
            <fieldset className={styles.fieldset}>
              <label className={styles.label} htmlFor="name">
                Show Name
              </label>
              <input
                type="text"
                className={styles.input}
                id="name"
                value={showName}
              />
            </fieldset>
            <fieldset className={styles.fieldset}>
              <label className="Label" htmlFor="username">
                Your Name
              </label>
              <input type="text" className={styles.input} id="username" />
            </fieldset>
            <fieldset className={styles.fieldset}>
              <label className="Label" htmlFor="username">
                Email Address
              </label>
              <input type="email" className={styles.input} id="username" />
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
