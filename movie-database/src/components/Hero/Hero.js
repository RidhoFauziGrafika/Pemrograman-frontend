import { useState } from "react";
import styles from "./Hero.module.css";
import { useEffect } from "react";

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
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{movie.Title}</h2>
          <h3 className={styles.hero__genre}>Genre : {movie.Genre}</h3>
          <p className={styles.hero__description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            et nostrum voluptas, beatae recusandae officia temporibus est iusto
            incidunt ratione dolore in, vero eos nobis! Quia eveniet ducimus
            sequi reprehenderit!
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
