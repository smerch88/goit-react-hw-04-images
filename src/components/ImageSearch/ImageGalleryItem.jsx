import style from './styles/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ src, dataid, alt }) => {
  return (
    <>
      <li className={style.ImageGalleryItem}>
        <img
          src={src}
          alt={alt}
          className={style.ImageGalleryItemImage}
          data-id={dataid}
          loading="lazy"
        ></img>
      </li>
    </>
  );
};

ImageGalleryItem.prototypes = {
  src: PropTypes.array.isRequired,
  dataid: PropTypes.array.isRequired,
  alt: PropTypes.array.isRequired,
};
