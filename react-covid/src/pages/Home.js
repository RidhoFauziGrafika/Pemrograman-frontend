import Hero from "../components/Hero";
import Global from "../components/Global";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Region from "../components/Region";
import endpoints from "../utils/constants/endpoints";

function Home() {
  const [covid, setCovid] = useState([]);
  const [regions, setRegion] = useState([]);

  useEffect(() => {
    getGlobalCovid() && getRegionCovid();
  }, []);

  async function getGlobalCovid() {
    const response = await axios(endpoints.HOME);
    setCovid(response.data.global);
  }

  async function getRegionCovid() {
    const response = await axios(endpoints.HOME);
    const data = response.data.regions.map((region) => ({
      name: region.name,
      ...region.numbers,
    }));
    setRegion(data);
  }

  return (
    <>
      <Hero />
      <Global covid={covid} title="Global Situation" />
      <Region regions={regions} title="Situation by Regions" />
    </>
  );
}

export default Home;
