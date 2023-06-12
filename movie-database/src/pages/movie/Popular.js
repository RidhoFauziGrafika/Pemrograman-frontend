import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function Popular() {
  // membuat state movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    // fetch data dari axios
    const response = await axios(ENDPOINTS.POPULAR);
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
