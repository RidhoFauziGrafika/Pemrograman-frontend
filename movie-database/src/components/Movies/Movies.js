import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";

function Movies(props) {
  const { movies, setMovies } = props;

  function handleClick() {
    const movie = {
      id: nanoid(),
      title: "Jigsaw Spiral",
      year: 2021,
      tyoe: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    setMovies([...movies, movie]);
  }
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{props.title}</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
