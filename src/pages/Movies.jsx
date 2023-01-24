import { api } from 'api/searchMovies';
import MovieList from 'components/movieList/MovieList';
import SearchBar from 'components/searchBar/SearchBar';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [queryMovies, setQueryMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query') ?? '';
  const location = useLocation();
  const configSrc = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    if (!movieQuery) return;
    const fetchedMovies = async () => {
      api.endpoint = '/search/movie';
      api.query = movieQuery;

      try {
        const movies = await api.fetchMovies();
        setQueryMovies(movies.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchedMovies();
  }, [movieQuery]);

  const onFormSubmit = searchQuery => {
    if (searchQuery.trim().toLowerCase() === movieQuery.trim().toLowerCase()) {
      return;
    }
    setSearchParams(searchQuery !== '' ? { query: searchQuery } : {});
  };

  return (
    <>
      <SearchBar onFormSubmit={onFormSubmit} value={movieQuery} />
      {queryMovies && (
        <MovieList
          movies={queryMovies}
          location={location}
          configSrc={configSrc}
        />
      )}
    </>
  );
}
