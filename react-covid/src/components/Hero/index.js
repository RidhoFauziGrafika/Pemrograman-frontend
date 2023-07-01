import img from "../../asset/img/undraw_medical_care_movn.png";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";

function Hero() {
  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>Covid ID</h2>
          <h3>Monitoring Perkembangan Covid</h3>
          <p>
            Monitoring terkait covid-19 yang ada dinegara Indonesia dan
            menganalisa terkait kasus infeksi covid-19 yang bertujuan untuk
            memperoleh informasi yang akurat dan terbaru.
          </p>
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
