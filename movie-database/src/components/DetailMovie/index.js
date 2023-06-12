import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import ENDPOINTS from "../../utils/constants/endpoints";

const StyledDetailMovie = styled.div`
  // Mobile Screen
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  text-align: center;
  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
  }
  h2 {
    font-size: 2.44rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  h3 {
    font-size: 1.59rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
  p {
    text-align: justify;
    margin-bottom: 2rem;
    color: #64748b;
  }
  // Medium Screen: 768px
  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    .poster {
      flex-basis: 40%;
    }
    .info {
      flex-basis: 50%;
    }
  }
  // Large Screen
  @media screen and (min-width: 992px) {
  }
`;

function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  // jalankan useEffect : fetch detail movie
  useEffect(() => {
    getDetailMovie();
  }, [id]);

  // membuat fungsi untuk fetch detail movie
  async function getDetailMovie() {
    const response = await axios(ENDPOINTS.DETAIL(id));

    setMovie(response.data);
  }

  //   simpan genres dan trailer ke variable
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie &&
    `https://www.youtube.com/watch?v=${
      movie.videos.results[0]?.key || "YAY-nmmPO-E"
    }`;
  console.log(movie);
  return (
    <div>
      <StyledDetailMovie>
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="info">
          <h2>{movie.title}</h2>
          <h3>{genres}</h3>
          <p>{movie.overview}</p>
          <Button as="a" href={trailer}>
            Watch
          </Button>
        </div>
      </StyledDetailMovie>
    </div>
  );
}

export default DetailMovie;
