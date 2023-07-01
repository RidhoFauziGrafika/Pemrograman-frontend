import styled from "styled-components";

const StyledRegions = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .card__titleCountry {
    font-size: 1.5rem;
    text-align: center;
  }

  .card__titleStatus {
    font-size: 1rem;
    color: #64748b;
  }

  .card__textConfirm {
    font-size: 1.2rem;
    color: #118ab2;
  }

  .card__textRecovered {
    font-size: 1.2rem;
    color: #06d6a0;
  }

  .card__textDead {
    font-size: 1.2rem;
    color: #ef476f;
  }

  /* medium screen */
  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export default StyledRegions;
