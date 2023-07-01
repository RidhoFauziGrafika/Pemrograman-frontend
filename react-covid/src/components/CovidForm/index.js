import { useState } from "react";
import { nanoid } from "nanoid";
import Alert from "../Alert";
import img from "../../asset/img/undraw_conceptual_idea_xw7k.png";
import Button from "../ui/Button";
import StyledCovidForm from "./Covidform.style";

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
  const [errors, setErrors] = useState({});

  const { province, status, jumlah } = formData;

  function validate() {
    const newErrors = {};
    // membuat kondisi jika input kosong
    if (province === "") {
      newErrors.province = `Province Wajib Diisi`;
    }
    if (status === "") {
      newErrors.status = `Status Wajib Diisi`;
    }
    if (jumlah === "") {
      newErrors.jumlah = `Jumlah Wajib Diisi`;
    }
    setErrors({ ...newErrors });
    return Object.keys(newErrors).length === 0;
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
    <StyledCovidForm>
      <section>
        <div className="addCovid__left">
          <img src={img} alt="placeholder" />
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Form Covid</h2>
          <div>
            <div>
              <div>
                <div>
                  <label>Provinsi</label>
                  <select
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
                  {<Alert>{errors.province}</Alert>}
                </div>
                <div>
                  <label>Status</label>
                  <select value={status} name="status" onChange={handleChange}>
                    <option value="kasus">Kasus</option>
                    <option value="sembuh">Sembuh</option>
                    <option value="dirawat">Dirawat</option>
                    <option value="meninggal">Meninggal</option>
                  </select>
                  {<Alert>{errors.status}</Alert>}
                </div>
                <div>
                  <label>Jumlah</label>
                  <input
                    type="number"
                    value={jumlah}
                    name="jumlah"
                    onChange={handleChange}
                  />
                  {<Alert>{errors.jumlah}</Alert>}
                </div>
                <Button full size="md">
                  Add Movie
                </Button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </StyledCovidForm>
  );
}

export default CovidForm;
