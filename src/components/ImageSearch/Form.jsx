import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={inputValue}
            onChange={event => {
              setInputValue(event.target.value);
            }}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </>
  );
};
