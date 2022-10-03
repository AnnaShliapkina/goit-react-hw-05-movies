import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../servises/Api';
import { CastCard } from 'components/CastCard/CastCard';

const Cast = () => {
  const [cast, setCast] = useState(null);
  let { moveId } = useParams();

  useEffect(() => {
    API.getCast(moveId).then(r => setCast(r));
  }, [moveId]);

  return (
    <ul>
      {cast?.map((oneCast, index) => (
        <CastCard key={index} oneCast={oneCast} />
      ))}
    </ul>
  );
};

export default Cast;
