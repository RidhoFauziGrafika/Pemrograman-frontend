import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function Popular() {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    // fetch data dari axios
    const response = await axios(ENDPOINTS.POPULAR);
    const movies = response.data.results;
    dispatch(updateMovies(movies));
  }

  return (
    <div>
      <Hero />
      <Movies title="Popular Movies" />
    </div>
  );
}

export default Popular;
