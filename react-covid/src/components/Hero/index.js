import img from "../../asset/img/undraw_medical_care_movn.png";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import StyledHero from "./Hero.styled";

function Hero() {
  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <Heading>Covid ID</Heading>
          <h3>Monitoring Perkembangan Covid</h3>
          <Text>
            Monitoring terkait covid-19 yang ada dinegara Indonesia dan
            menganalisa terkait kasus infeksi covid-19 yang bertujuan untuk
            memperoleh informasi yang akurat dan terbaru.
          </Text>
          <Button size="md">Vaccine</Button>
        </div>
        <div className="hero__right">
          <img src={img} />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
