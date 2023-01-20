import {
  TrendingListTitle,
  TrendingList,
  TrendingListItem,
  TrendingListPoster,
} from './MovieList.styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  configSrc: PropTypes.string.isRequired,
};
