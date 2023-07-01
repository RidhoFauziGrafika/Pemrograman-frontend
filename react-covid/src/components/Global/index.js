import Globals from "../Globals";
import StyledGlobal from "./Global.style";

function Global(props) {
  const { covid } = props;
  return (
    <StyledGlobal>
      <section>
        <div className="covid__header">
          <h2>{props.title}</h2>
          <p>Data Covid Berdasarkan {props.title}</p>
        </div>
        <div className="card__container">
          {covid.map((data, i) => {
            return <Globals key={i} status={data.status} total={data.total} />;
          })}
        </div>
      </section>
    </StyledGlobal>
  );
}

export default Global;
