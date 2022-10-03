import { useEffect, useState } from 'react';
import * as API from '../servises/Api';
import { FilmList } from 'components/FilmList/FilmList';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    API.getTrendingMovies().then(r => setTrendingMovies(r));
  }, []);
  return (
    <div>
      <h2> Trending today</h2>
      {trendingMovies && <FilmList movies={trendingMovies} />}
    </div>
  );
};

export default HomePage;
