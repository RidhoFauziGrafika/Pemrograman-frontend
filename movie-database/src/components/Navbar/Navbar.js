import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Movie App</h1>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li>
              <Link to="/" className={styles.navbar__item}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/movie/create" className={styles.navbar__item}>
                Add Movie
              </Link>
            </li>
            <li>
              <Link to="/movie/popular" className={styles.navbar__item}>
                Popular
              </Link>
            </li>
            <li>
              <Link to="/movie/now-playing" className={styles.navbar__item}>
                Now Playing
              </Link>
            </li>
            <li>
              <Link to="/movie/top-rated" className={styles.navbar__item}>
                Top Rated
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
