import StyledRegions from "./Regions.style";

function Regions(props) {
  const regions = props;

  return (
    <StyledRegions>
      <h3 className="card__titleCountry">{regions.name}</h3>
      <div>
        <p className="card__titleStatus">Confirmed</p>
        <p className="card__textConfirm">{regions.confirmed}</p>
      </div>
      <div>
        <p className="card__titleStatus">Death</p>
        <p className="card__textDead"> {regions.death}</p>
      </div>
      <div>
        <p className="card__titleStatus">Recovered</p>
        <p className="card__textRecovered"> {regions.recovered}</p>
      </div>
    </StyledRegions>
  );
}

export default Regions;
