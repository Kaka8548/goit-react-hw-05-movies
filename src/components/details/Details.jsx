import {
  DetailsItem,
  DetailsList,
  DetailsTitle,
  GenresItem,
  GenresList,
  MainDetailsItem,
  MainDetailsList,
} from './Details.styled';

export default function Details({ movieDetails }) {
  const configSrc = 'https://image.tmdb.org/t/p/original';
  const { poster_path, vote_average, overview, genres, title } = movieDetails;

  return (
    <MainDetailsList>
      <MainDetailsItem>
        <img src={configSrc + poster_path} alt="movie poster" />
      </MainDetailsItem>

      <MainDetailsItem>
        <DetailsList>
          <DetailsItem>
            <DetailsTitle>{title}</DetailsTitle>
          </DetailsItem>
          <DetailsItem>User Score: {vote_average}</DetailsItem>
          <DetailsItem>Overview</DetailsItem>
          <DetailsItem>{overview}</DetailsItem>
          <DetailsItem>Genres</DetailsItem>{' '}
          <DetailsItem>
            <GenresList>
              {genres &&
                genres.map(genre => (
                  <GenresItem key={genre.id}>{genre.name}</GenresItem>
                ))}
            </GenresList>
          </DetailsItem>
        </DetailsList>
      </MainDetailsItem>
    </MainDetailsList>
  );
}
