import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../servises/Api';
import { CastCard } from 'components/CastCard/CastCard';

const Cast = () => {
  const [cast, setCast] = useState(null);
  let { movieId } = useParams();

  useEffect(() => {
    API.getCast(movieId).then(r => setCast(r));
  }, [movieId]);

  return (
    <ul>
      {cast?.map((oneCast, index) => (
        <CastCard key={index} oneCast={oneCast} />
      ))}
    </ul>
  );
};

export default Cast;
