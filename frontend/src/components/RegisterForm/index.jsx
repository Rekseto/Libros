import React, {Component} from "react";

import "./index.css";
class RegisterForm extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.register = this.register.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  register(event) {
    event.preventDefault();
    const {username, password, email, permission} = this.state;

    this.props.register(username, password, email, permission);
  }

  state = {
    username: "",
    password: "",
    email: "",
    permission: 1
  };

  render() {
    const {onChange} = this;
    return (
      <form className="registerPage__form" onSubmit={e => this.register(e)}>
        <div className="registerPage__inputGroup">
          <label htmlFor="username">Nazwa użytkownika</label>
          <input
            className="registerPage__textInput"
            type="text"
            id="username"
            name="username"
            onChange={onChange}
          />
        </div>

        <div className="registerPage__inputGroup">
          <label htmlFor="password">Hasło</label>
          <input
            className="registerPage__textInput"
            type="password"
            id="password"
            name="password"
            onChange={onChange}
          />
        </div>

        <div className="registerPage__inputGroup">
          <label htmlFor="email">Email</label>
          <input
            className="registerPage__textInput"
            type="email"
            id="email"
            name="email"
            onChange={onChange}
          />
        </div>

        <input
          className="registerPage__submit"
          type="submit"
          value="Zarejestruj się"
        />
      </form>
    );
  }
}

export default RegisterForm;
