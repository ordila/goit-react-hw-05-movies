import axios from 'axios';
const API_KEY = 'f2ffea4938b1399a0724ac9ef0692c2b';
const BASE_URL = 'https://api.themoviedb.org/3';
const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});
export const requestTrendMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const getMovieById = async movieId => {
  const { data } = await instance.get(`/movie/ ${movieId}`);
  return data;
};

export const requestCasts = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/casts`);

  return data;
};

export const getReviewsByID = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/reviews`);
  return data;
};
//https://api.themoviedb.org/3/search/movie?query=batman

export const getMovieByQuery = async query => {
  const { data } = await instance.get(`search/movie?query=${query}`);
  return data;
};
