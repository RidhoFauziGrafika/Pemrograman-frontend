import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getRecomendationMovies();
  }, []);

  async function getRecomendationMovies() {
    const response = await axios(ENDPOINTS.RECOMENDASION(id));
    setMovies(response.data.results);
  }

  console.log(movies);

  return (
    <div>
      <DetailMovie />
      <Movies movies={movies} title="Recomendasion Movies" />
    </div>
  );
}

export default Detail;
