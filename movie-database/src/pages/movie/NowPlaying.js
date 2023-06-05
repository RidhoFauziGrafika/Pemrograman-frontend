import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function NowPlaying() {
  // simpan API_KEY dan url ke variabel
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

  // membuat state movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    // fetch data dari axios
    const response = await axios(url);
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
