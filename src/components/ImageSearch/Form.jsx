import { useState } from 'react';
import style from './Form.module.css';

export const Form = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <>
      <div className={style.Searchbar}>
        <form onSubmit={handleSubmit} className={style.SearchForm}>
          <label className={style.SearchFormButtonLabel}></label>
          <input
            className={style.SearchFormInput}
            type="text"
            value={inputValue}
            autoFocus
            placeholder="Search Images and Photos"
            onChange={event => {
              setInputValue(event.target.value);
            }}
          />
          <button type="submit" className={style.SearchFormButton}></button>
        </form>
      </div>
    </>
  );
};
