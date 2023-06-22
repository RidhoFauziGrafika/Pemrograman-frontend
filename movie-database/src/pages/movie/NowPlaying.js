import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function NowPlaying() {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    // fetch data dari axios
    const response = await axios(ENDPOINTS.NOWPLAYING);
    const movies = response.data.results;
    dispatch(updateMovies(movies));
  }
  return (
    <div>
      <Hero />
      <Movies title="Now Playing Movies" />
    </div>
  );
}

export default NowPlaying;
