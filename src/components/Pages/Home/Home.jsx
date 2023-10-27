import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { requestTrendMovies } from 'services/api';

const Home = () => {
  const { pathname } = useLocation();
  console.log('location', pathname);
  const [trendMovies, setTredMovies] = useState([]);
  useEffect(() => {
    const requstFunction = async () => {
      if (!trendMovies || trendMovies.length === 0) {
        try {
          const { results } = await requestTrendMovies();
          setTredMovies(results);
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    requstFunction();
  }, [trendMovies]);

  return (
    <ul>
      {trendMovies.map(el => {
        return (
          <li key={el.id}>
            <Link state={pathname} to={`/movies/${el.id}`} key={el.id}>
              {el.title || el.name}
            </Link>
          </li>
        );
      })}
      <h1>hi there</h1>
    </ul>
  );
};

export default Home;
