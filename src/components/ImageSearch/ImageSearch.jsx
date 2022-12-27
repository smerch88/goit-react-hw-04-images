import style from './ImageSearch.module.css';

import { fetchImages } from '../services/api';
import { useState, useEffect } from 'react';
import { Form } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';

export const ImageSearch = () => {
  const [submittedName, setSubmittedName] = useState('');
  const [submittedNumber, setSubmittedNumber] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  const loadMore = () => {
    setSubmittedNumber(submittedNumber + 1);
  };

  useEffect(() => {
    if (submittedName) {
      async function fetchData() {
        const result = await fetchImages(submittedName, submittedNumber);
        setImages(result.hits);
      }
      fetchData();
      setIsLoad(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submittedName]);

  useEffect(() => {
    if (submittedName) {
      async function fetchData() {
        const result = await fetchImages(submittedName, submittedNumber);
        setImages([...images, ...result.hits]);
      }
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submittedNumber]);

  return (
    <>
      <div className={style.App}>
        <Form onSubmit={setSubmittedName} />
        {isLoad && <Loader size={50} />}
        <ImageGallery images={images} />
        {submittedName && <Button onClick={loadMore} />}
      </div>
    </>
  );
};
