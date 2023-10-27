import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ListOfFilms = ({ listOfMoviesByQuery }) => {
  const location = useLocation();
  console.log('location', location);
  return (
    <ul>
      {listOfMoviesByQuery &&
        listOfMoviesByQuery.map(el => {
          return (
            <li key={el.id}>
              <Link state={location} to={`/movies/${el.id}`} key={el.id}>
                {el.title || el.name}
              </Link>
            </li>
          );
        })}
      <h1>hi there</h1>
    </ul>
  );
};

export default ListOfFilms;
