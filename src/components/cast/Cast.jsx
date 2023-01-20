import searchMovies from 'api/searchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    if (!movieCast) return;

    const search = new searchMovies();
    search.searchType = `/movie/${movieId}/credits`;

    async function fetchedMovies() {
      try {
        const result = await search.fetchMovies();
        setMovieCast(result.data.cast);
      } catch (error) {
        console.log(error);
      }
    }

    fetchedMovies();
  }, [movieCast, movieId]);

  return (
    <CastList>
      {movieCast.map(actor => (
        <li key={actor.id}>{actor.name};</li>
      ))}
    </CastList>
  );
}
