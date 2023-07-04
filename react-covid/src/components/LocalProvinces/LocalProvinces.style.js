import styled from "styled-components";

const StyledLocalProvinces = styled.div`
  margin: 1rem;

  section {
    margin: 3rem 0;
    flex-direction: column;
    display: flex;
    text-align: center;
  }

  .table__container {
    align-items: center;
    justify-content: center;
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
  }

  th {
    color: #06d6a0;
  }

  th,
  td {
    border: 1px solid black;
    padding: 25px;
  }

  /* medium screen */
  @media (min-width: 768px) {
    .table__container {
      margin: 0;
    }
  }

  /* large screen */
  @media (min-width: 992px) {
    .table__container {
      max-width: 1600px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default StyledLocalProvinces;
