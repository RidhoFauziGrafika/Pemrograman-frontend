import Globals from "../Globals";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import StyledGlobal from "./Global.style";

function Global(props) {
  const { covid } = props;
  return (
    <StyledGlobal>
      <section>
        <div className="covid__header">
          <Heading>{props.title}</Heading>
          <Text>Data Covid Berdasarkan {props.title}</Text>
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
