import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: #06d6a0;
  padding: 1rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 2.44rem;
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    margin-bottom: 2rem;
  }

  .navbar__link {
    text-decoration: none;
    color: #fff;
  }

  /* medium screen */
  @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      margin: 1rem;
    }

    ul {
      flex-direction: row;
    }

    li {
      margin: 0 2rem;
    }
  }
`;

export default StyledNavbar;
