import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './nav.scss';
function NavBar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg nav fixed-top  p-3">
      <div className="container">
        <a className="navbar-brand" href="#hero">
          Restorani Subotica
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#hero">
                Restorani
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#hero">
                Kategorije
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#hero">
                Mapa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#hero">
                Za Vlasike
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
