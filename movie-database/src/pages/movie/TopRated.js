import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRated() {
  // membuat state movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  async function getTopRatedMovies() {
    // fetch data dari axios
    const response = await axios(ENDPOINTS.TOPRATED);
    // simpan data ke state movie
    setMovies(response.data.results);

    console.log(movies);
  }
  return (
    <div>
      <Hero />
      <Movies movies={movies} title="Top Rated Movies" />
    </div>
  );
}

export default TopRated;
