import { useState } from 'react';
import { SearchForm, SearchInput, SubmitBtn } from './SearchBar.styled';

export default function SearchBar({ onFormSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setQuery(event.target[0].value);
    onFormSubmit(query);
  };

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type the movie name"
      />
      <SubmitBtn type="submit">Seacrh</SubmitBtn>
    </SearchForm>
  );
}
