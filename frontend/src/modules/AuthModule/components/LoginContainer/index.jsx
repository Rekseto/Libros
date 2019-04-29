import React from "react";
import {connect} from "react-redux";

import LoginForm from "../LoginForm";
import {actions as authActions} from "../../";

class LoginPage extends React.Component {
  login = (username, password) => {
    this.props.loginRequest(username, password);
  };

  render() {
    return <LoginForm login={this.login} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: (username, password) =>
      dispatch(authActions.authLoginRequest(username, password))
  };
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
