import { Link } from "react-router-dom";
import StyledFooter from "./Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <footer>
        <div>
          <h1>Covid ID</h1>
          <p>Developed by aufaroot18</p>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/" className="navbar__link">
                Global
              </Link>
            </li>
            <li>
              <Link to="/covid/indonesia" className="navbar__link">
                Indonesia
              </Link>
            </li>
            <li>
              <Link to="/covid/provinsi" className="navbar__link">
                Provinsi
              </Link>
            </li>
            <li>
              <Link to="/covid/about" className="navbar__link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
