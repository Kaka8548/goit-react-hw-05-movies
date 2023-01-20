import searchMovies from 'api/searchMovies';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from 'components/movieList/MovieList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const configSrc = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    const search = new searchMovies();
    search.searchType = '/trending/movie/day';

    async function fetchedMovies() {
      try {
        const result = await search.fetchMovies();
        if (movies.length === 0) {
          setMovies(result.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchedMovies();
  }, [movies]);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies} location={location} configSrc={configSrc} />
    </>
  );
}
