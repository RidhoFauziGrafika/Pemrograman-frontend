import styled from "styled-components";

const StyledGlobals = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .card__titleConfirm,
  .card__titleRecovered,
  .card__titleDead {
    font-size: 1.2rem;
  }

  .card__textConfirm {
    font-size: 2rem;
    color: #118ab2;
  }

  .card__textRecovered {
    font-size: 2rem;
    color: #06d6a0;
  }

  .card__textDead {
    font-size: 2rem;
    color: #ef476f;
  }

  /* large screen */
  @media (min-width: 992px) {
    padding: 50px;
  }
`;

export default StyledGlobals;
