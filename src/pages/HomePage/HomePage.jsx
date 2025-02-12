import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMovies } from '../../services/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const dataMovies = await fetchMovies();
      console.log(dataMovies);
    };
    getData();
  }, []);

  return (
    <div>
      <MovieList />
    </div>
  );
};

export default HomePage;
