import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        props.mode === "blue" ? "light" : "props.mode"
      } bg-${props.mode === "blue" ? "light" : "props.mode"}`}
    >
      <div className={`container-fluid`}>
        <a
          className={`navbar-brand text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          href="/"
        >
          {props.title}
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link active text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                aria-current="page"
                to="/"
              >
                {props.link_1}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link active text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                to="/about"
              >
                {props.link_2}
              </Link>
            </li>
          </ul>
          <button
            type="button"
            onClick={props.toggleMode}
            className="btn btn-primary"
          >
            Toggle Mode
          </button>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  link_1: PropTypes.string.isRequired,
  link_2: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "No value set",
  link_1: "No value set",
  link_2: "No value set",
};
