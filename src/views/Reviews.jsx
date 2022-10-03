import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../servises/Api';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  let { movieId } = useParams();

  useEffect(() => {
    API.getReviews(movieId).then(r => setReviews(r));
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews?.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </ul>
      {reviews?.length === 0 && (
        <p>Sorry there are no reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
