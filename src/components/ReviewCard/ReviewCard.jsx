import PropTypes from 'prop-types';
import {
  ReviewAuthor,
  ReviewBox,
} from 'components/ReviewCard/ReviewCard.styled';

export const ReviewCard = ({ review: { author, content } }) => {
  return (
    <ReviewBox>
      <ReviewAuthor>{`Author:${author}`}</ReviewAuthor>
      <p>{content}</p>
    </ReviewBox>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};
