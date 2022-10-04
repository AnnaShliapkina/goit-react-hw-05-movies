import PropTypes from 'prop-types';
import { CardImage, CastCharacter, CastActor } from './CardCast.styled';

export const CastCard = ({ oneCast: { name, character, profile_path } }) => {
  return (
    <li>
      <CastCharacter>{`Character: ${character}`}</CastCharacter>
      <CardImage
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w200/${profile_path}`
            : 'https://dummyimage.com/100x150/000000/a2a3ab'
        }
        alt=""
      />
      <CastActor>{name}</CastActor>
    </li>
  );
};

CastCard.propeTypes = {
  oneCast: PropTypes.shape({
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }),
};
