import React from "react";
import {Link} from "react-router-dom";

import "./index.css";

export default ({user, logout}) => {
  return (
    <div className="profileBar d-flex flex-column align-items-center">
      <h2 className="profileBar__username">{user.username}</h2>

      <div className="profileBar__links col-8">
        <button className="profileBar__btn" onClick={logout}>
          Wyloguj
        </button>
        <Link className="profileBar__btn" to="/">
          Zarezerwuj książke
        </Link>
        {user.permission === 1 ? (
          <React.Fragment>
            <Link className="profileBar__btn" to="/admin/addBook">
              Dodaj książke
            </Link>
            <Link className="profileBar__btn" to="/admin/removeBook">
              Usuń książke
            </Link>
            <Link className="profileBar__btn" to="/admin/loan">
              Wypożycz
            </Link>
            <Link className="profileBar__btn" to="/admin/users/0">
              Użytkownicy
            </Link>
            <Link className="profileBar__btn" to="/admin/loans/0">
              Wypożyczenia
            </Link>
            <Link className="profileBar__btn" to="/admin/addPublisher">
              Dodaj wydawnictwo
            </Link>
            <Link className="profileBar__btn" to="/admin/addCategory">
              Dodaj kategorie
            </Link>
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
};
