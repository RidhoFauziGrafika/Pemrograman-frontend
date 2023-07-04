import styled from "styled-components";

const StyledHero = styled.div`
  padding: 1rem;
  text-align: center;

  h3 {
    color: #118ab2;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  img {
    max-width: 100%;
  }

  /* large screen */
  @media (min-width: 992px) {
    text-align: left;
    max-width: 1200px;
    margin: 0 auto;

    section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 1.5rem;
    }

    .hero__left {
      flex-basis: 40%;
    }

    .hero__right {
      flex-basis: 40%;
    }
  }
`;

export default StyledHero;
