function LocalProvince(props) {
  const { covid } = props;
  return (
    <tbody>
      <tr>
        <td>{covid.no}</td>
        <td>{covid.kota}</td>
        <td>{covid.kasus}</td>
        <td>{covid.sembuh}</td>
        <td>{covid.dirawat}</td>
        <td>{covid.meninggal}</td>
      </tr>
    </tbody>
  );
}

export default LocalProvince;
