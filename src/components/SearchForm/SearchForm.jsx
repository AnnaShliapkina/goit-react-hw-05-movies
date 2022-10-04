import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form } from 'components/SearchForm/SearchForm.styled';

export const SearchForm = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const inputForm = useRef();

  useEffect(() => {
    const query = searchParams.get('query');

    if (query) {
      inputForm.current.value = query;
    }
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.search.value });
  };

  return (
    <div>
      <Form action="" onSubmit={handleSubmit}>
        <input ref={inputForm} type="text" name="search" />
        <button type="submit">Search</button>
      </Form>
    </div>
  );
};
