import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <div>
          <h1>Covid ID</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/" className="navbar__link">
                Home
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
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
