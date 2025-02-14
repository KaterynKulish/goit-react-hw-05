import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMoviesById } from '../../services/api';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  // console.log(movieId);

  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackUrl = useRef(location.state ?? '/movies');

  useEffect(() => {
    const getDataById = async () => {
      try {
        const { data } = await fetchMoviesById(movieId);
        setMovie(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataById();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Link to={goBackUrl.current}>Go back</Link>

      <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
      <h2>
        {movie.title}({movie.release_date})
      </h2>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>
        {movie.genres.map(item => (
          <span key={item.id}>{item.name} </span>
        ))}
      </p>

      <h3>Additional information</h3>
      <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>

      <div>
        <Outlet className="outlet" />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
