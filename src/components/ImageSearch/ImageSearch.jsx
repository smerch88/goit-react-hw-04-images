import { fetchImages } from '../services/api';
import { useState, useEffect } from 'react';
import { Form } from './Form';
import { Gallery } from './Gallery';

export const ImageSearch = () => {
  const [submittedName, setSubmittedName] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (submittedName) {
      async function fetchData() {
        const result = await fetchImages(submittedName);
        console.log(result.hits);
        setImages(result.hits);
      }
      fetchData();
    }
  }, [submittedName]);

  return (
    <>
      <Form onSubmit={setSubmittedName} />
      <Gallery images={images} />
    </>
  );
};
