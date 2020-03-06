import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../App.css";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
      <div className="container" style={{ maxWidth: "70%" }}>
        <Link to="/" className="navbar-brand ">
          {branding}{" "}
        </Link>

        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="add" className="nav-link">
              <i className="fas fa-plus"></i> Add
            </Link>
          </li>

          <li className="nav-item">
            <Link to="about" className="nav-link">
              <i className="fas fa-question"></i> About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
