import styled from "styled-components";

const StyledGlobal = styled.div`
  max-width: 1600px;
  background-color: ghostwhite;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .covid__header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card__container {
    width: 100%;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }

  /* medium screen */
  @media (min-width: 768px) {
    .card__container {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }
  }

  /* large screen */
  @media (min-width: 992px) {
    height: 450px;
  }
`;

export default StyledGlobal;
