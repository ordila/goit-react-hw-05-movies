import { Route, Routes } from 'react-router-dom';

import React, { Suspense, lazy } from 'react';
import Home from './Pages/Home/Home';
import Layout from './Layout/Layout';
import Cast from './Pages/Cast/Cast';
import Review from './Review/Review';
const Movies = lazy(() => import('./Pages/Movies/Movies'));
const MoviesDetail = lazy(() => import('./Pages/MoviesDetail/MoviesDetail'));

export const App = () => {
  return (
    <Suspense fallback={<h1>LOADING...</h1>}>
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
    </Suspense>
  );
};
