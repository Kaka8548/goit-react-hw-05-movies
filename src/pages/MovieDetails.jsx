import searchMovies from 'api/searchMovies';
import Details from 'components/details/Details';
import GoBackBtn from 'components/goBackBtn/GoBackBtn';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieDetails) return;

    const search = new searchMovies();
    search.searchType = `/movie/${movieId}`;

    async function fetchedMovies() {
      try {
        const result = await search.fetchMovies();
        setMovieDetails(result.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchedMovies();
  }, [movieDetails, movieId]);

  return (
    <div>
      <GoBackBtn backLinkHref={backLinkHref}>Go back</GoBackBtn>
      <Details movieDetails={movieDetails} />
    </div>
  );
}
