import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

export default ({deleteBook, user}) => {
  if (user && user.permission === 1) {
    return (
      <React.Fragment>
        <ul className="adminPanel__list d-flex flex-column align-items-center">
          <button className="adminPanel__button" onClick={deleteBook}>
            Usuń książkę
          </button>
          <Link className="adminPanel__button" to="/admin/editBook">
            Edytuj
          </Link>
          <Link className="adminPanel__button" to="/admin/loan">
            Wypożycz
          </Link>
        </ul>
      </React.Fragment>
    );
  } else {
    return null;
  }
};
