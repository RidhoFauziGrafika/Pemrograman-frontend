import styled from "styled-components";
import img from "../../asset/img/profile-about.jpeg";

const StyledAbout = styled.div`
  padding: 1rem;
  text-align: center;

  h2 {
    color: #06d7a0;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #118ab2;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  p {
    color: #64748b;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    border-radius: 100%;
  }

  /* large screen */
  @media (min-width: 992px) {
    text-align: left;
    max-width: 1200px;
    margin: 0 auto;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1.5rem;
  }

  .about__left {
    flex-basis: 40%;
  }

  .about__right {
    flex-basis: 40%;
  }
`;

function About() {
  return (
    <StyledAbout>
      <section>
        <div className="about__left">
          <h2>Ridho Fauzi Grafika</h2>
          <h3>Teknik Informatika</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            eveniet itaque facilis quis. Totam earum cupiditate ea deleniti
            labore illum tempore! Ad, aut libero quo similique vero ab tempora
            labore.
          </p>
        </div>
        <div className="about__right">
          <img src={img} />
        </div>
      </section>
    </StyledAbout>
  );
}

export default About;
