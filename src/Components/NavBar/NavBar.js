import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    padding: scrollPosition > 80 ? '5px 10px' : '10px',
    transition: 'padding 1s ease',
  };

  const logoStyle = {
    fontSize: scrollPosition > 80 ? '25px' : '27px',
    transition: 'font-size 1s ease',
  };

  return (
    <nav  className="navbar nav-custom navbar-expand-lg text-light p-4 position-fixed w-100 z-3">
      <div id="navbar" style={navbarStyle} className="container">
        <NavLink id="logo" style={logoStyle} className="nav-link logo" to="">
          START FRAMEWORK
        </NavLink>
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
              <NavLink
                className={({ isActive }) =>
                  isActive == true
                    ? "nav-link nav-link-custom text-light mx-2 rounded "
                    : "nav-link text-light mx-2 "
                }
                to="about"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive == true
                    ? "nav-link nav-link-custom text-light mx-2 rounded"
                    : "nav-link text-light mx-2"
                }
                to="portfolio"
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive == true
                    ? "nav-link nav-link-custom text-light mx-2 rounded"
                    : "nav-link text-light mx-2"
                }
                to="contact"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
