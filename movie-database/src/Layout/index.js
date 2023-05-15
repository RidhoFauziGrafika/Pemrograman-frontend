import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container/";

function Layout(props) {
  return (
    <div>
      <Navbar />
      <main>
        <Container>{props.children}</Container>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
