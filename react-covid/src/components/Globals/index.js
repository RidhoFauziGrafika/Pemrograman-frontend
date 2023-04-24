import styles from "./Globals.module.css";

function Globals(props) {
  const covid = props;

  return (
    <div className={styles.card}>
      <h3
        className={
          covid.status == "Positif"
            ? styles.card__titleConfirm
            : covid.status == "Sembuh"
            ? styles.card__titleRecovered
            : styles.card__titleDead
        }
      >
        {covid.status}
      </h3>
      <p
        className={
          covid.status == "Positif"
            ? styles.card__textConfirm
            : covid.status == "Sembuh"
            ? styles.card__textRecovered
            : styles.card__textDead
        }
      >
        {covid.total}
      </p>
    </div>
  );
}

export default Globals;
