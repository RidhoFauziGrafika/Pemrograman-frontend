import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Indonesia from "./pages/covid/indonesia";
import About from "./pages/covid/about";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";
import Provinsi from "./pages/covid/provinsi";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/covid/indonesia" element={<Indonesia />}></Route>
            <Route path="/covid/provinsi" element={<Provinsi />}></Route>
            <Route path="/covid/about" element={<About />}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
