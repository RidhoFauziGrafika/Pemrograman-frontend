import { nanoid } from "nanoid";
import styles from "./Provinces.module.css";
import Province from "../Province";

function Provinces(props) {
  const { covid } = props;
  return (
    <div className={styles.container}>
      <section className={styles.province}>
        <h2 className={styles.province__title}>Provinsi</h2>
        <p className={styles.province__subTitle}>
          Data Covid berdasarkan Provinsi
        </p>
        <div className={styles.table__container}>
          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Provinsi</th>
                  <th>Kasus</th>
                  <th>Sembuh</th>
                  <th>Dirawat</th>
                  <th>Meninggal</th>
                </tr>
              </thead>
              {covid.provinces.map((data, i) => {
                return (
                  <Province
                    key={nanoid()}
                    no={++i}
                    kota={data.kota}
                    kasus={data.kasus}
                    sembuh={data.sembuh}
                    dirawat={data.dirawat}
                    meninggal={data.meninggal}
                  />
                );
              })}
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Provinces;
