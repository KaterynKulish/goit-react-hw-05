import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map(
          ({ id, title, release_date, poster_path, vote_average }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={location}>
                  {poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                    />
                  ) : (
                    <p>
                      Not image for movies {title} ({release_date})
                    </p>
                  )}
                  {title} ({release_date}) Raiting: {vote_average}
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default MovieList;
