import { useState } from "react";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import data from "../utils/constants/data";
import Counter from "../components/Counter";

function Home() {
  const [movies, setMovies] = useState(data);
  return (
    <div>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </div>
  );

  // return <Counter />;
}

export default Home;
