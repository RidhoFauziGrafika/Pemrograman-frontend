import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Hero from "../../components/Hero";
import Global from "../../components/Global";
import Provinces from "../../components/Provinces";
import endpoints from "../../utils/constants/endpoints";

function Indonesia() {
  const [covid, setCovid] = useState([]);
  const [regions, setRegion] = useState([]);

  useEffect(() => {
    getIndonesiaCovid() && getRegionCovid();
  }, []);

  async function getIndonesiaCovid() {
    const response = await axios(endpoints.INDONESIA);
    setCovid(response.data.indonesia);
  }

  async function getRegionCovid() {
    const response = await axios(endpoints.INDONESIA);
    const data = response.data.regions.map((region) => ({
      name: region.name,
      ...region.numbers,
    }));
    setRegion(data);
  }

  return (
    <div>
      <Hero />
      <Global covid={covid} title="Indonesia Situation" />
      <Provinces
        regions={regions}
        setRegion={setRegion}
        title="Situation by Provinces"
      />
    </div>
  );
}

export default Indonesia;
