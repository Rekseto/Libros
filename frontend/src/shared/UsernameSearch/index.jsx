import React, {useState} from "react";
import "./index.css";

function UsernameSearch({submit, change, value}) {
  return (
    <div className="UsernameSearch">
      <p>Wyszukaj po nazwie użytkownika</p>
      <form onSubmit={submit} className="UsernameSearch__form">
        <input
          name="username"
          id="username"
          onChange={change}
          type="text"
          className="inputText"
          value={value}
        />
        <button className="submit">Wyszukaj</button>
      </form>
    </div>
  );
}

export default UsernameSearch;
