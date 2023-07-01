import { useSelector } from "react-redux";
import Hero from "../../components/Hero";
import LocalProvinces from "../../components/LocalProvinces";

function Provinsi() {
  const covidRedux = useSelector((store) => store.covid.covid);
  console.log(covidRedux);
  return (
    <div>
      <Hero />
      <LocalProvinces />
    </div>
  );
}

export default Provinsi;
