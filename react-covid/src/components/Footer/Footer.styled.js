import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #06d6a0;
  padding: 1rem;
  color: #fff;

  h1 {
    font-size: 2rem;
    padding: 1rem;
  }

  p {
    padding: 1rem;
  }

  ul {
    list-style: none;
  }

  li {
    padding: 1rem;
    margin: 0 1rem;
  }

  .navbar__link {
    text-decoration: none;
    color: #fff;
  }

  /* medium screen */
  @media (min-width: 768px) {
    footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1,
    p {
      margin: 0;
    }
    ul {
      display: flex;
      flex-direction: row;
    }
  }
`;

export default StyledFooter;
