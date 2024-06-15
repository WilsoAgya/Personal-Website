import "/scss/Nav.scss";

function Nav() {
  return (
    <nav className="navbar mx-xl-3 navbar-expand-md">
      <div className="container-fluid mx-xl-4 px-xl-5">
        <h2 className="text-secondary fw-light mx-lg-3 mx-xl-auto me-xl-5">
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
              <a href="#" className="nav-link active text-secondary">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-secondary">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-secondary">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-secondary">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
