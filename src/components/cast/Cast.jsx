import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';
import { api } from 'api/searchMovies';

export default function Cast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    if (!movieCast) return;

    const search = api;
    search.endpoint = `/movie/${movieId}/credits`;

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
