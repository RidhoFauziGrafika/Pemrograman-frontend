import styled from "styled-components";

const StyledRegion = styled.div`
  max-width: 1600px;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .region__header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .headingTitle {
    text-align: center;
  }

  .regions__subTitle {
    text-align: center;
  }

  .card__container {
    display: grid;
    width: 100%;
    padding: 0 2rem;
    justify-content: center;
    grid-gap: 2rem;
  }

  /* medium screen */
  @media (min-width: 768px) {
    .card__container {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
    }
  }
`;

export default StyledRegion;
