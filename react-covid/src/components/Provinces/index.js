import StyledProvinces from "./Provinces.styled";
import Province from "../Province";

function Provinces(props) {
  const { regions } = props;
  return (
    <StyledProvinces>
      <section>
        <h2>{props.title}</h2>
        <p>Data Covid berdasarkan {props.title}</p>
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
              {regions.map((data, i) => {
                return (
                  <Province
                    key={i}
                    no={++i}
                    kota={data.name}
                    kasus={data.confirmed}
                    sembuh={data.recovered}
                    dirawat={data.treatment}
                    meninggal={data.death}
                  />
                );
              })}
            </table>
          </div>
        </div>
      </section>
    </StyledProvinces>
  );
}

export default Provinces;
