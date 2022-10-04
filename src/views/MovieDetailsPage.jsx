import { useState, useEffect, Suspense, lazy } from 'react';
import {
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
  Link,
} from 'react-router-dom';
import * as API from '../servises/Api';

import {
  Container,
  Button,
  List,
  Item,
  Wrapper,
  Text,
} from 'components/MovieDetailsPage/MovieDetailsPage.styled';

const Cast = lazy(() => import('../views/Cast'));
const Reviews = lazy(() => import('../views/Reviews'));
const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [buttonPlace, setButtonPlace] = useState(null);
  let { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    API.getOneMovie(movieId).then(r => setMovie(r));
  }, [movieId]);

  useEffect(() => {
    if (location?.state?.from) {
      setButtonPlace(location.state.from);
    }
  }, [location?.state?.from]);

  return (
    movie && (
      <>
        <Button
          type="button"
          onClick={() => {
            navigate(buttonPlace || '/');
          }}
        >
          Go back
        </Button>
        <Container>
          <img
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
            alt=""
          />
          <List>
            <Item>
              <h2>{`${movie.title} (${movie.release_date.slice(0, 4)})`}</h2>
              <Text>{`User Score: ${Math.round(
                movie.vote_average * 10
              )}%`}</Text>
            </Item>
            <Item>
              <h3>Overview</h3>
              <Text>{movie.overview}</Text>
            </Item>
            <Item>
              <h3>Genres</h3>
              <Text>{movie.genres.map(genre => genre.name).join(' ')}</Text>
            </Item>
          </List>
        </Container>
        <Wrapper>
          <h3>Additional information</h3>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </Wrapper>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </>
    )
  );
};

export default MovieDetailsPage;
