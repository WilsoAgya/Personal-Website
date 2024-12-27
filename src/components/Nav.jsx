import "/scss/Nav.scss";
import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className="navbar mx-xl-3 navbar-expand-md">
      <div className="container-fluid mx-xl-4 px-xl-5">
        <h2 className="text-secondary ankh-sanctuary fw-light mx-lg-3 mx-xl-auto me-xl-5">
          WA
        </h2>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="about" className="nav-link" offset={-100}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="skills" className="nav-link" offset={100}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects" className="nav-link" offset={-100}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
