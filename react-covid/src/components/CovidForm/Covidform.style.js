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

  label {
    color: #64748b;
    text-align: left;
    display: block;
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

    form {
      flex-basis: 45%;
    }

    label {
      margin: 0;
    }
  }
`;

export default StyledCovidForm;
