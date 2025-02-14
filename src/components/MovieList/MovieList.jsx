import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  const defaultImg =
    'https://dummyimage.com/200x300/cdcdcd/000.jpg&text=No+poster';

  return (
    <div>
      <ul>
        {movies.map(
          ({ id, title, release_date, poster_path, vote_average }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={location}>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w200/${poster_path}`
                        : defaultImg
                    }
                  />
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
