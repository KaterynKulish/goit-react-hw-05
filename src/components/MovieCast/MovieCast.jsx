import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from '../../services/api';

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getDataCasts = async () => {
      try {
        const { cast } = await fetchCastById(movieId);
        setCasts(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getDataCasts();
  }, [movieId]);

  return (
    <div>
      <ul>
        {casts.map(cast => (
          <li key={cast.id}>
            <img src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`} />
            {cast.name} Character: {cast.character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
