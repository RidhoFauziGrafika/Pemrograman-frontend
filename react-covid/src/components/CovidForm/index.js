import { useState } from "react";
import styles from "./CovidForm.module.css";
import { nanoid } from "nanoid";
import Alert from "../Alert";
import img from "../../asset/img/undraw_conceptual_idea_xw7k.png";

function CovidForm(props) {
  const { covid, setCovid } = props;

  // membuat state object
  const [formData, setFormData] = useState({
    province: "",
    status: "",
    jumlah: "",
  });

  // membuat fungsi handleChange untuk handle semua input form
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // membuat state error
  const [isProvince, setIsProvinceError] = useState(false);
  const [isStatus, setIsStatusError] = useState(false);
  const [isJumlah, setIsjumlahError] = useState(false);

  const { province, status, jumlah } = formData;

  function validate() {
    // membuat kondisi jika input kosong
    if (province === "") {
      setIsProvinceError(true);
      return;
    } else if (status === "") {
      setIsStatusError(true);
      setIsProvinceError(false);
      return;
    } else if (jumlah === "") {
      setIsjumlahError(true);
      setIsStatusError(false);
      return;
    } else {
      setIsProvinceError(false);
      setIsStatusError(false);
      setIsjumlahError(false);
      return true;
    }
  }

  function updateProvinceCovid() {
    // mencari index dan provinsi yang ingin diupdate
    const index = covid.provinces.findIndex((item) => item.kota === province);
    const foundProvince = covid.provinces.find(
      (item) => item.kota === province
    );

    // akses provinsi (array) yang ingin diupdate menggunakan index
    covid.provinces[index] = {
      // lakukan spread : copy provinsi yang sudah ditemukan sebelumnya
      ...foundProvince,
      // update property berdasarkan nilai dari status : teknik computed property
      [status]: parseInt(foundProvince[status]) + parseInt(jumlah),
    };

    // update state: spread operator
    setCovid({ ...covid, provinces: [...covid.provinces] });
  }

  function handleSubmit(e) {
    e.preventDefault();

    validate() && updateProvinceCovid();
  }

  return (
    <div className={styles.container}>
      <section className={styles.addCovid}>
        <div className={styles.addCovid__left}>
          <img className={styles.addCovid__image} src={img} alt="placeholder" />
        </div>
        <form onSubmit={handleSubmit} className={styles.addCovidForm__form}>
          <h2 className={styles.addCovidForm__title}>Form Covid</h2>
          <div>
            <div>
              <div>
                <div>
                  <label className={styles.addCovidForm__labelTitle}>
                    Provinsi
                  </label>
                  <select
                    className={styles.addCovidForm__formAddCovid}
                    value={province}
                    name="province"
                    onChange={handleChange}
                  >
                    {covid.provinces.map((data) => {
                      return (
                        <option key={nanoid()} value={data.kota}>
                          {data.kota}
                        </option>
                      );
                    })}
                  </select>
                  {isProvince && <Alert>Provinsi wajib diisi</Alert>}
                </div>
                <div>
                  <label className={styles.addCovidForm__labelTitle}>
                    Status
                  </label>
                  <select
                    className={styles.addCovidForm__formAddCovid}
                    value={status}
                    name="status"
                    onChange={handleChange}
                  >
                    <option value="kasus">Kasus</option>
                    <option value="sembuh">Sembuh</option>
                    <option value="dirawat">Dirawat</option>
                    <option value="meninggal">Meninggal</option>
                  </select>
                  {isStatus && <Alert>Status wajib diisi</Alert>}
                </div>
                <div>
                  <label className={styles.addCovidForm__labelTitle}>
                    Jumlah
                  </label>
                  <input
                    className={styles.addCovidForm__formAddCovid}
                    type="number"
                    value={jumlah}
                    name="jumlah"
                    onChange={handleChange}
                  />
                  {isJumlah && <Alert>Jumlah wajib diisi</Alert>}
                </div>
                <button className={styles.addCovidForm__button}>Submit</button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default CovidForm;
