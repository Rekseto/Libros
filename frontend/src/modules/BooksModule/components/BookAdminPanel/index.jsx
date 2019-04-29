import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import {renderIfAdmin} from "../../../AuthModule";

export default renderIfAdmin(({deleteBook}) => {
  return (
    <ul className="">
      <button className="" onClick={deleteBook}>
        Usuń książkę
      </button>
      <Link className="" to="/admin/editBook">
        Edytuj
      </Link>
      <Link className="" to="/admin/addLoan/1">
        Wypożycz
      </Link>
    </ul>
  );
});
