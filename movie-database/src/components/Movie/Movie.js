import StyledMovie from "./Movie.styled";

function Movie(props) {
  const { movie } = props;
  return (
    <StyledMovie>
      <img
        src={
          movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
        }
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <h4>{movie.type}</h4>
      <p>{movie.year || new Date(movie.release_date).getFullYear()}</p>
    </StyledMovie>
  );
}

export default Movie;
