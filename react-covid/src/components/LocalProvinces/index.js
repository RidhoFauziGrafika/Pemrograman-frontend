import StyledLocalProvinces from "./LocalProvinces.style";
import LocalProvince from "../LocalProvince";
import { useSelector } from "react-redux";
import Heading from "../ui/Heading";
import Text from "../ui/Text";

function LocalProvinces() {
  const covid = useSelector((store) => store.covid.covid);
  return (
    <StyledLocalProvinces>
      <section>
        <Heading>Provinsi</Heading>
        <Text>Data Covid Berdasarkan provinsi</Text>
        <div className="table__container">
          <div className="table">
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
                  <LocalProvince
                    key={i}
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
    </StyledLocalProvinces>
  );
}

export default LocalProvinces;
