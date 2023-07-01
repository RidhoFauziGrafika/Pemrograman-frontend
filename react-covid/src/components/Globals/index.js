import StyledGlobals from "./Globals.style";

function Globals(props) {
  const covid = props;

  const cardClassName = ` 
  ${
    covid.status == "confirmed"
      ? "card__titleConfirm"
      : covid.status == "recovered"
      ? "card__titleRecovered"
      : "card__titleDead"
  } 
  
  ${
    covid.status == "confirmed"
      ? "card__textConfirm"
      : covid.status == "recovered"
      ? "card__textRecovered"
      : "card__textDead"
  }`;

  return (
    <StyledGlobals>
      <h3 className={cardClassName}>{covid.status}</h3>
      <p className={cardClassName}>{covid.total}</p>
    </StyledGlobals>
  );
}

export default Globals;
