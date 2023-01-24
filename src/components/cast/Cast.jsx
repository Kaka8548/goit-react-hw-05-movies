import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';
import { api } from 'api/searchMovies';

export default function Cast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    api.endpoint = `/movie/${movieId}/credits`;

    async function fetchedMovies() {
      try {
        const result = await api.fetchMovies();
        setMovieCast(result.data.cast);
      } catch (error) {
        console.log(error);
      }
    }

    fetchedMovies();
  }, [movieId]);

  return (
    <CastList>
      {movieCast.map(actor => (
        <li key={actor.id}>{actor.name};</li>
      ))}
    </CastList>
  );
}
