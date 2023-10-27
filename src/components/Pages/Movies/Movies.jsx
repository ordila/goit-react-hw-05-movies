import ListOfFilms from 'components/ListOfFilms/ListOfFilms';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/api';

const Movies = () => {
  const [listOfMoviesByQuery, setListOfMovies] = useState([]);
  const [searchParams, setSearchParamsByQuery] = useSearchParams();
  const queryValue = searchParams.get('query');

  const onFormSubmit = async event => {
    event.preventDefault();
    setSearchParamsByQuery({ query: event.currentTarget.elements.input.value });
  };
  useEffect(() => {
    if (!queryValue) return;
    const fetch = async () => {
      try {
        const response = await getMovieByQuery(queryValue);

        if (response && response.results) {
          const results = response.results;
          setListOfMovies(results);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetch();
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input name="input" defaultValue={queryValue || ''} type="text" />
        <button type="submit">Search</button>
        {listOfMoviesByQuery.length > 0 && (
          <ListOfFilms listOfMoviesByQuery={listOfMoviesByQuery}></ListOfFilms>
        )}
      </form>
    </div>
  );
};

export default Movies;
