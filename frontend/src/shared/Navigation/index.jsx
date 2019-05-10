import React from "react";
import {Link} from "react-router-dom";

import "./index.css";
export default () => {
  return (
    <header className="header flex-column flex-lg-row justify-content-lg-start">
      <h1 className="header__heading ">
        <Link className="header__headingLink" to="/">
          <img className="header__headingLogo" src="/images/logo.svg" alt="" />
          Libros
        </Link>
      </h1>
      <nav className="navigation d-flex justify-content-center justify-content-lg-start">
        <ul className="navigation__list">
          <li className="navigation__element">
            <Link className="navigation__link" to="/search/1">
              <img src="/images/search.svg" aria-hidden="true" alt="" />
              Wyszukiwarka
            </Link>
          </li>
          <li className="navigation__element">
            <Link className="navigation__link" to="/profile">
              <img src="/images/profile.svg" aria-hidden="true" alt="" />
              Konto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
