import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlaying() {
  // membuat state movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    // fetch data dari axios
    const response = await axios(ENDPOINTS.NOWPLAYING);
    // simpan data ke state movie
    setMovies(response.data.results);

    console.log(movies);
  }
  return (
    <div>
      <Hero />
      <Movies movies={movies} title="Now Playing Movies" />
    </div>
  );
}

export default NowPlaying;
