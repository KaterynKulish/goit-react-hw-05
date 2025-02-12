import { NavLink, Outlet } from 'react-router-dom';

const MovieDetailsPage = () => {
  return (
    <div>
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
