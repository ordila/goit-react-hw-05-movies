import { Route, Routes } from 'react-router-dom';

import React from 'react';
import Home from './Pages/Home/Home';
import Movies from './Pages/Movies/Movies';
import Layout from './Layout/Layout';
import MoviesDetail from './Pages/MoviesDetail/MoviesDetail';
import Cast from './Pages/Cast/Cast';
import Review from './Review/Review';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviesDetail />}>
            <Route path={'cast'} element={<Cast></Cast>}></Route>
            <Route path={'review'} element={<Review></Review>}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
