import styles from "./Global.module.css";
import data from "../../utils/constants/indonesia";
import Globals from "../Globals";
import { nanoid } from "nanoid";

function Global() {
  const covid = data;
  return (
    <div className={styles.container}>
      <section className={styles.covid}>
        <div className={styles.covid__header}>
          <h2 className={styles.covid__title}>Indonesia</h2>
          <p className={styles.covid__subTitle}>
            Data Covid Berdasarkan Global
          </p>
        </div>
        <div className={styles.card__container}>
          {covid.indonesia.map((data) => {
            return (
              <Globals key={nanoid()} status={data.status} total={data.total} />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Global;
