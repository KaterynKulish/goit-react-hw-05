import axios from 'axios';

// https://api.themoviedb.org/3/search/movie

const option = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmUzZmE5MjU0YTFiMGM5MzIwMTUxYjE0NTM0Y2EyMyIsIm5iZiI6MTczMzk4NzY3NC43OTMsInN1YiI6IjY3NWE4ZDVhOWFlNTI2ZDUwOGE5YzliNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9_lyJoMMjYxk89WeexP-8GTp9gl1iK8BQol9nndjTaU',
  },
};

// axios.default.baseURL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  const data = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day',
    option
  );
  return data;
};
