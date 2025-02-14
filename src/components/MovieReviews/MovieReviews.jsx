import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services/api';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setRewiews] = useState([]);

  useEffect(() => {
    const getDataRewies = async () => {
      try {
        const { data } = await fetchReviews(movieId);
        setRewiews(data.results);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataRewies();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>We dont have any reviews for this movie</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <b>Author: {review.author}</b> <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
