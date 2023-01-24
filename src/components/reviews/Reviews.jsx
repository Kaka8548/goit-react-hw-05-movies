import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  AuthorName,
  AuthorReview,
  NoReviewText,
  ReviewsItem,
  ReviewsList,
} from './Reviews.styled';
import { api } from 'api/searchMovies';

export default function Reviews() {
  const { movieId } = useParams();
  const [movieReview, setMovieReview] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    api.endpoint = `/movie/${movieId}/reviews`;

    async function fetchedMovies() {
      try {
        const result = await api.fetchMovies();
        setMovieReview(result.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchedMovies();
  }, [movieId]);

  return (
    <>
      {movieReview.length === 0 ? (
        <NoReviewText>There are no reviews for this movie 🙃</NoReviewText>
      ) : (
        <ReviewsList>
          {movieReview.map(author => (
            <ReviewsItem key={author.id}>
              <AuthorName>{author.author}: </AuthorName>
              <AuthorReview>{author.content}</AuthorReview>
            </ReviewsItem>
          ))}
        </ReviewsList>
      )}
    </>
  );
}
