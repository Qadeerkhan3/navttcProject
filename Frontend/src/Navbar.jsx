import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import UseDarkMode from "./UseDarkMode";
import Login from "./login";
import "./App.css";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://marketplace.canva.com/EAGQ1aYlOWs/1/0/1600w/canva-blue-colorful-illustrative-e-commerce-online-shop-logo-bHiX_0QpJxE.jpg"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/product"
              >
                product
              </Link>
            </li>
            <li
              className={`nav-item dropdown ${dropdownOpen ? "show" : ""}`}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded={dropdownOpen}
              >
                Dropdown link
              </a>
              <ul
                className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/checkout"
                  >
                    Checkout
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={`nav-item dropdown ${dropdownOpen2 ? "show" : ""}`}
              onMouseEnter={() => setDropdownOpen2(true)}
              onMouseLeave={() => setDropdownOpen2(false)}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded={dropdownOpen2}
              >
                Dropdown link
              </a>
              <ul
                className={`dropdown-menu ${dropdownOpen2 ? "show" : ""}`}
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    careers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <>
            <UseDarkMode />
            
            <Link
              to="/login"
              className="btn btn-success px-4 py-2 rounded-pill shadow-sm text-white"
              style={{ fontWeight: "500", fontSize: "16px" }}
            >
              Login
            </Link>
            <ThemeToggle />
          </>
        </div>
      </div>
    </nav>
  );
}
