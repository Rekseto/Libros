import React from "react";
import {connect} from "react-redux";

import LoginForm from "../../components/LoginForm";
import Header from "../../components/Header";

import "./index.css";
import {authActions} from "../../state/ducks/auth";

class LoginPage extends React.Component {
  constructor() {
    super();

    this.login = this.login.bind(this);
  }

  login(username, password) {
    this.props.loginRequest(username, password);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="main loginPage">
          <LoginForm login={this.login} />
        </main>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: (username, password) =>
      dispatch(authActions.loginRequest(username, password))
  };
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
