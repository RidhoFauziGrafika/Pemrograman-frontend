import StyledNavbar from "./Navbar.styled";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <StyledNavbar>
      <div>
        <nav>
          <div>
            <h1>Movie App</h1>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/" className="navbar__link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/movie/create" className="navbar__link">
                  Add Movie
                </Link>
              </li>
              <li>
                <Link to="/movie/popular" className="navbar__link">
                  Popular
                </Link>
              </li>
              <li>
                <Link to="/movie/now-playing" className="navbar__link">
                  Now Playing
                </Link>
              </li>
              <li>
                <Link to="/movie/top-rated" className="navbar__link">
                  Top Rated
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
