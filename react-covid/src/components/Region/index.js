import Regions from "../Regions";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import StyledRegion from "./Region.style";

function Region(props) {
  const { regions } = props;
  return (
    <StyledRegion>
      <section>
        <div className="region__header">
          <Heading className="headingTitle">{props.title}</Heading>
          <Text className="regions__subTitle">Bacaan Pilihan Covid</Text>
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
