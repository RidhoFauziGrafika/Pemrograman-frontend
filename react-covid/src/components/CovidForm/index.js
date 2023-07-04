import { useState } from "react";
import { nanoid } from "nanoid";
import Alert from "../Alert";
import img from "../../asset/img/undraw_conceptual_idea_xw7k.png";
import Button from "../ui/Button";
import StyledCovidForm from "./Covidform.style";
import { useDispatch, useSelector } from "react-redux";
import { updateCovid } from "../../features/moviesSlice";
import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Heading from "../ui/Heading";

function CovidForm() {
  const covid = useSelector((store) => store.covid.covid);

  // membuat dispatch
  const dispatch = useDispatch();

  // membuat navigate
  const navigation = useNavigate();

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
    dispatch(updateCovid(formData));
    navigation("/covid/provinsi");
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
          <Heading>Form Covid</Heading>
          <div>
            <div>
              <div>
                <div>
                  <label>Provinsi</label>
                  <Select
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
                  </Select>
                  {<Alert>{errors.province}</Alert>}
                </div>
                <div>
                  <label>Status</label>
                  <Select value={status} name="status" onChange={handleChange}>
                    <option value="kasus">Kasus</option>
                    <option value="sembuh">Sembuh</option>
                    <option value="dirawat">Dirawat</option>
                    <option value="meninggal">Meninggal</option>
                  </Select>
                  {<Alert>{errors.status}</Alert>}
                </div>
                <div>
                  <label>Jumlah</label>
                  <Input
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
