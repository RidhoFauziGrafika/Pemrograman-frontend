import { useState } from "react";
import { useEffect } from "react";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";

function Hero() {
  // membuat state movie
  const [movie, setMovie] = useState("");
  async function fetchMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
  }
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <StyledHero>
      <div>
        <section>
          <div className="hero__left">
            <h2>{movie.Title}</h2>
            <h3>Genre : {movie.Genre}</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur et nostrum voluptas, beatae recusandae officia
              temporibus est iusto incidunt ratione dolore in, vero eos nobis!
              Quia eveniet ducimus sequi reprehenderit!
            </p>
            <Button variant="primary" size="md">
              Watch
            </Button>
          </div>
          <div className="hero__right">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
