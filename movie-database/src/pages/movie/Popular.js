import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function Popular() {
  // simpan API_KEY dan url ke variabel
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  // membuat state movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    // fetch data dari axios
    const response = await axios(url);
    // simpan data ke state movie
    setMovies(response.data.results);

    console.log(movies);
  }

  return (
    <div>
      <Hero />
      <Movies movies={movies} title="Popular Movies" />
    </div>
  );
}

export default Popular;
