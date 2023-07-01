import styled from "styled-components";

const StyledCovidForm = styled.div`
  background-color: ghostwhite;

  section {
    max-width: 1200px;
    margin: auto;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  .addCovid__left {
    margin-bottom: 2.5rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
    display: none;
  }

  form {
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2.44rem;
    color: #06d6a0;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  label {
    color: #64748b;
    text-align: left;
    display: block;
  }

  select,
  input {
    border: 1px solid #06d6a0;
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 5px;
    margin-bottom: 15px;
  }

  /* large screen */
  @media (min-width: 992px) {
    section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    img {
      display: block;
      margin-top: 5rem;
    }

    .addCovid__left {
      flex-basis: 45%;
    }

    h2 {
      text-align: left;
    }

    form {
      flex-basis: 45%;
    }

    label {
      margin: 0;
    }
  }
`;

export default StyledCovidForm;
