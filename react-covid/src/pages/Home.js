import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Provinces from "../components/Provinces";
import CovidForm from "../components/CovidForm";
import Global from "../components/Global";
import { useState } from "react";
import data from "../utils/constants/provinces";

function Main() {
  const [covid, setCovid] = useState(data);
  return (
    <main>
      <Hero />
      <Global />
      <Provinces covid={covid} setCovid={setCovid} />
      <CovidForm covid={covid} setCovid={setCovid} />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
