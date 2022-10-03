import axios from 'axios';

const KEY = '?api_key=f5218897c19d56d1ba7debc5ad0a32a8';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day${KEY}`);
  return response.data.results.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
};

export const getOneMovie = async value => {
  const response = await axios.get(`/movie/${value}${KEY}&language=en-US`);
  return response.data;
};

export const getCast = async value => {
  const response = await axios.get(
    `/movie/${value}/credits${KEY}&language=en-US`
  );
  return response.data.cast.map(({ name, character, profile_path, id }) => {
    return {
      name,
      character,
      profile_path,
      id,
    };
  });
};

export const getMovies = async value => {
  const response = await axios.get(`search/movie${KEY}&query=${value}&page=1`);
  return response.data.results.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
};

export const getReviews = async value => {
  const response = await axios.get(
    `/movie/${value}/reviews${KEY}&language=en-US&page=1`
  );
  return response.data.results.map(({ author, content, id }) => {
    return {
      author,
      content,
      id,
    };
  });
};
