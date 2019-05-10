import React, {Component, useState} from "react";

import "./index.css";

function RegisterForm({submit}) {
  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
    permission: "user"
  });

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const _submit = e => {
    e.preventDefault();

    submit(state);
  };

  return (
    <form className="RegisterForm" onSubmit={_submit}>
      <div className="inputGroup">
        <label className="label" htmlFor="username">
          Nazwa użytkownika
        </label>
        <input
          type="text"
          value={state.username}
          onChange={onChange}
          name="username"
          id="username"
          className="textInput"
        />
      </div>

      <div className="inputGroup">
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          value={state.email}
          onChange={onChange}
          name="email"
          id="email"
          className="textInput"
        />
      </div>

      <div className="inputGroup">
        <label className="label" htmlFor="username">
          Hasło tymczasowe
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="textInput"
          value={state.password}
          onChange={onChange}
        />
      </div>

      <div className="inputGroup">
        <label className="label" htmlFor="permission">
          Uprawnienia użytkownika
        </label>

        <select className="textInput" onChange={onChange}>
          <option value="user">Użytkownik</option>
          <option value="admin">Administrator</option>
        </select>
      </div>

      <div className="inputGroup">
        <button className="submit">Dodaj użytkownika</button>
      </div>
    </form>
  );
}

export default RegisterForm;
