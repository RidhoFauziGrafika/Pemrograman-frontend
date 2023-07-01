import Regions from "../Regions";
import StyledRegion from "./Region.style";

function Region(props) {
  const { regions } = props;
  return (
    <StyledRegion>
      <section>
        <div className="region__header">
          <h2>{props.title}</h2>
          <p className="regions__subTitle">Bacaan Pilihan Covid</p>
        </div>
        <div className="card__container">
          {regions.map((data, i) => {
            return (
              <Regions
                key={i}
                name={data.name}
                confirmed={data.confirmed}
                death={data.death}
                recovered={data.recovered}
              />
            );
          })}
        </div>
      </section>
    </StyledRegion>
  );
}

export default Region;
