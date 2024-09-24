import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black ">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link mx-3">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
