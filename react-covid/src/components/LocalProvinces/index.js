import StyledLocalProvinces from "./LocalProvinces.style";
import LocalProvince from "../LocalProvince";

function LocalProvinces(props) {
  const { covid } = props;
  console.log(covid);
  return (
    <StyledLocalProvinces>
      <section>
        <h2>Provinsi</h2>
        <p>Data Covid Berdasarkan provinsi</p>
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

export default LocalProvinces();
