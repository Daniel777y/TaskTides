import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/index">TaskTides</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={"nav-link" + (props.activePage === "IndexPage" ? " active" : "")} to="/index">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link" + (props.activePage === "ChecklistsPage" ? " active" : "")} to="/checklists">Checklists</Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link" + (props.activePage === "TimeBlocksPage" ? " active" : "")} to="/timeblocks">TimeBlocks</Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link" + (props.activePage === "AboutPage" ? " active" : "")} to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

NavBar.propTypes = {
  activePage: PropTypes.string.isRequired,
};

export default NavBar;
