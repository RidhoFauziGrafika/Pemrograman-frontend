import Text from "../ui/Text";
import StyledRegions from "./Regions.style";

function Regions(props) {
  const regions = props;

  return (
    <StyledRegions>
      <h3 className="card__titleCountry">{regions.name}</h3>
      <div>
        <Text>Confirmed</Text>
        <p className="card__textConfirm">{regions.confirmed}</p>
      </div>
      <div>
        <Text>Death</Text>
        <p className="card__textDead"> {regions.death}</p>
      </div>
      <div>
        <Text>Recovered</Text>
        <p className="card__textRecovered"> {regions.recovered}</p>
      </div>
    </StyledRegions>
  );
}

export default Regions;
