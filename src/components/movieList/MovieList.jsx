import {
  TrendingListTitle,
  TrendingList,
  TrendingListItem,
  TrendingListPoster,
} from './MovieList.styled';
import { Link } from 'react-router-dom';

export default function MovieList({ movies, location, configSrc }) {
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
