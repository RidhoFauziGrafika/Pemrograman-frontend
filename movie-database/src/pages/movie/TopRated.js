import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function TopRated() {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  async function getTopRatedMovies() {
    // fetch data dari axios
    const response = await axios(ENDPOINTS.TOPRATED);
    const movies = response.data.results;
    dispatch(updateMovies(movies));
  }
  return (
    <div>
      <Hero />
      <Movies title="Top Rated Movies" />
    </div>
  );
}

export default TopRated;
