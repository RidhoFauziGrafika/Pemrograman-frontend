import StyledMovie from "./Movie.styled";

function Movie(props) {
  const { movie } = props;
  return (
    <StyledMovie>
      <img src={movie.poster} alt="placeholder" />
      <h3>{movie.title}</h3>
      <h4>{movie.type}</h4>
      <p>{movie.year}</p>
    </StyledMovie>
  );
}

export default Movie;
