import React, {Component} from "react";
import "./index.css";
class LoginForm extends Component {
  constructor() {
    super();
  }

  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  state = {
    username: "",
    password: ""
  };

  submit = e => {
    e.preventDefault();
    const {username, password} = this.state;

    this.props.login(username, password);
  };

  render() {
    return (
      <form className="LoginForm" onSubmit={this.submit}>
        <div className="LoginForm__inputGroup">
          <label htmlFor="username" className="LoginForm__label">
            Nazwa użytkownika
          </label>
          <input
            className="LoginForm__textInput"
            type="text"
            id="username"
            onChange={this.onChangeUsername}
          />
        </div>

        <div className="LoginForm__inputGroup">
          <label htmlFor="password" className="LoginForm__label">
            Hasło
          </label>
          <input
            className="LoginForm__textInput"
            type="password"
            id="password"
            onChange={this.onChangePassword}
          />
        </div>

        <button className="LoginForm__submit" type="submit">
          Zaloguj się
        </button>
      </form>
    );
  }
}
export default LoginForm;
