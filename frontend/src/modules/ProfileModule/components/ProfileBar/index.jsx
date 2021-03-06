import React from "react";
import {Link} from "react-router-dom";

import "./index.css";
import {LogoutPressable, renderIfAdmin} from "../../../AuthModule/";

export default ({user}) => {
  return (
    <header className="ProfileBar">
      <div className="d-flex">
        <h2 className="ProfileBar__heading">{user.username}</h2>
        <LogoutPressable />
      </div>
      {user.permission === "admin" ? (
        <ul className="ProfileBar__list">
          <li className="ProfileBar__element">
            <Link className="ProfileBar__link" to="/admin/addBook">
              Dodaj książke
            </Link>
          </li>
          <li className="ProfileBar__element">
            <Link className="ProfileBar__link" to="/admin/users/1">
              Użytkownicy
            </Link>
          </li>
          <li className="ProfileBar__element">
            <Link className="ProfileBar__link" to="/admin/loans/1">
              Wypożyczenia
            </Link>
          </li>
          <li className="ProfileBar__element">
            <Link className="ProfileBar__link" to="/admin/addPublisher">
              Dodaj wydawnictwo
            </Link>
          </li>
          <li className="ProfileBar__element">
            <Link className="ProfileBar__link" to="/admin/addCategory">
              Dodaj kategorie
            </Link>
          </li>
        </ul>
      ) : null}
    </header>
  );
};
