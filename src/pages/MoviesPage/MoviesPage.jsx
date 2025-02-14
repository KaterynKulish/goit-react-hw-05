import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchSearchMovie } from '../../services/api';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [movies, setMovies] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    searchParams.set('query', value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        const { data } = await fetchSearchMovie(query);
        setMovies(data.results);
        // console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={e => setValue(e.target.value)}
          type="text"
          value={value}
        />
        <button type="submit">Search movies</button>
      </form>

      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
