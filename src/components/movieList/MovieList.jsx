import searchMovies from 'api/searchMovies';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  TrendingListTitle,
  TrendingList,
  TrendingListItem,
  TrendingListPoster,
} from './MovieList.styled';
import { Link, useLocation } from 'react-router-dom';

export default function MovieList() {
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
    <TrendingList>
      {movies.map(movie => (
        <TrendingListItem key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <TrendingListPoster
              src={configSrc + movie.poster_path}
              alt="movie poster"
            />
            <TrendingListTitle>{movie.title}</TrendingListTitle>
          </Link>
        </TrendingListItem>
      ))}
    </TrendingList>
  );
}
