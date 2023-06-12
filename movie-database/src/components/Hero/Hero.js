import { useState } from "react";
import { useEffect } from "react";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";

function Hero() {
  // membuat state movie
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  console.log(trailer);
  // const pageTitle =

  useEffect(() => {
    getDetailMovie();
  }, []);

  // mendapatkan satu data dari trending movies
  async function getTrendingMovies() {
    const response = await axios(ENDPOINTS.TRENDING);
    return response.data.results[0];
  }

  // membuat function untuk mendapatkan detail movie
  async function getDetailMovie() {
    // mengambil id dari trending movie
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    // fetch detail movie by id
    const response = await axios(ENDPOINTS.HERO(id));
    console.log(response.data);

    setMovie(response.data);
  }
  return (
    <StyledHero>
      <div>
        <section>
          <div className="hero__left">
            <h2>{movie.title}</h2>
            <h3>Genre : {genres}</h3>
            <p>{movie.overview}</p>
            <Button
              as="a"
              href={trailer}
              target="_blank"
              variant="primary"
              size="md"
            >
              Watch
            </Button>
          </div>
          <div className="hero__right">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
            />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
