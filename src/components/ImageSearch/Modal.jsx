import { useEffect } from 'react';
import styles from './styles/Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ src, onClose, closeModalOnEsc }) => {
  const [{ largeImageURL }] = src;
  const [{ tags }] = src;

  useEffect(() => {
    document.addEventListener('keydown', closeModalOnEsc);
    return () => {
      document.removeEventListener('keydown', closeModalOnEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.Overlay} onClick={onClose}>
      <div className={styles.Modal}>
        <img src={largeImageURL} alt={tags} loading="lazy" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  src: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  closeModalOnEsc: PropTypes.func.isRequired,
};
