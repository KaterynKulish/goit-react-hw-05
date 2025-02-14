import axios from 'axios';

const option = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmUzZmE5MjU0YTFiMGM5MzIwMTUxYjE0NTM0Y2EyMyIsIm5iZiI6MTczMzk4NzY3NC43OTMsInN1YiI6IjY3NWE4ZDVhOWFlNTI2ZDUwOGE5YzliNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9_lyJoMMjYxk89WeexP-8GTp9gl1iK8BQol9nndjTaU',
  },
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  const data = await axios.get('/trending/movie/day', option);
  return data;
};

export const fetchMoviesById = async movieId => {
  const data = await axios.get(`/movie/${movieId}`, option);
  return data;
};

export const fetchCastById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`, option);
  return data;
};

export const fetchReviews = async movieId => {
  const data = await axios.get(`movie/${movieId}/reviews`, option);
  return data;
};

export const fetchSearchMovie = async query => {
  const data = await axios.get(`/search/movie?query=${query}`, option);
  return data;
};
