import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from 'components/movieList/MovieList';
import { api } from 'api/searchMovies';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const configSrc = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    const search = api;
    search.endpoint = '/trending/movie/day';

    async function fetchedMovies() {
      try {
        const result = await search.fetchMovies();
        setMovies(result.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchedMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies} location={location} configSrc={configSrc} />
    </>
  );
}
