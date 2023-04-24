import styles from "./Hero.module.css";
import img from "../../asset/img/undraw_medical_care_movn.png";
function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h3 className={styles.hero__subTitle}>
            Monitoring Perkembangan Covid
          </h3>
          <p className={styles.description}>
            Monitoring terkait covid-19 yang ada dinegara Indonesia dan
            menganalisa terkait kasus infeksi covid-19 yang bertujuan untuk
            memperoleh informasi yang akurat dan terbaru.
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className={styles.hero__right}>
          <img className={styles.hero__image} src={img} />
        </div>
      </section>
    </div>
  );
}

export default Hero;
