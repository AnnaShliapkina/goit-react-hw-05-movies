import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';

const HomePage = lazy(() => import('../views/HomePage'));
const Movies = lazy(() => import('../views/Movies'));
const MovieDetailsPage = lazy(() => import('../views/MovieDetailsPage'));
const ErrorUrl = lazy(() => import('../views/ErrorUrl'));

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route
            path="movies/:movieId/*"
            element={<MovieDetailsPage />}
          ></Route>
          <Route path="*" element={<ErrorUrl />} />
        </Routes>
      </Suspense>
    </>
  );
};
