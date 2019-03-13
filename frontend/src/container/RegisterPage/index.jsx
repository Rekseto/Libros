import React, {Component} from "react";
import {connect} from "react-redux";

import RegisterForm from "../../components/RegisterForm";
import Header from "../../components/Header";

import "./index.css";
import {authActions} from "../../state/ducks/auth";
class RegisterPage extends Component {
  login(event) {
    event.preventDefault();
    const {username, password, email, permission} = this.state;

    this.props.registerRequest(username, password, email, permission);
  }

  componentDidMount() {}

  state = {
    username: "",
    password: "",
    email: "",
    permission: 1
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="main registerPage">
          <RegisterForm register={this.props.registerRequest} />
        </main>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerRequest: (username, password, email, permission) =>
      dispatch(
        authActions.registerRequest(username, password, email, permission)
      )
  };
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);
