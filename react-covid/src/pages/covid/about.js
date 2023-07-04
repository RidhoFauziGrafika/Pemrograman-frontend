import styled from "styled-components";
import img from "../../asset/img/profile-about.jpeg";
import Heading from "../../components/ui/Heading";
import Text from "../../components/ui/Text";

const StyledAbout = styled.div`
  padding: 1rem;
  text-align: center;

  h3 {
    color: #118ab2;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  img {
    max-width: 100%;
    border-radius: 100%;
    display: none;
  }

  /* medium screen */
  @media (min-width: 768px) {
    img {
      display: block;
    }
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
    flex-basis: 50%;
  }

  .about__right {
    flex-basis: 30%;
  }
`;

function About() {
  return (
    <StyledAbout>
      <section>
        <div className="about__left">
          <Heading>Ridho Fauzi Grafika</Heading>
          <h3>Teknik Informatika</h3>
          <Text>
            Saya Ridho Fauzi Grafika, mahasiswa semester 4 Program Studi Teknik
            Informatika dari Sekolah Tinggi Teknologi Terpadu Nurul Fikri
            angkatan tahun 2021.
          </Text>
        </div>
        <div className="about__right">
          <img src={img} />
        </div>
      </section>
    </StyledAbout>
  );
}

export default About;
