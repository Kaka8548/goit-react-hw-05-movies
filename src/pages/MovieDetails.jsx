import SearchMovies from 'api/searchMovies';
import Details from 'components/details/Details';
import GoBackBtn from 'components/goBackBtn/GoBackBtn';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) return;

    const search = new SearchMovies();
    search.endpoint = `/movie/${movieId}`;

    async function fetchedMovies() {
      try {
        const result = await search.fetchMovies();
        setMovieDetails(result.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchedMovies();
  }, [movieId]);

  return (
    <div>
      <GoBackBtn backLinkHref={backLinkHref}>Go back</GoBackBtn>
      {movieDetails && <Details movieDetails={movieDetails} id={movieId} />}
    </div>
  );
}
