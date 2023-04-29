import { Link } from "react-router-dom";

// ...
import { FaSearch } from "react-icons/fa";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          My Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="input-group" style={{ height: "40px" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search product name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ height: "100%" }}
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text"
                    id="search-icon"
                    style={{ height: "100%" }}
                  >
                    <FaSearch style={{ height: "100%" }} />
                  </span>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productsform/seller1">
                Add a Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/myProduct">
                My products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
