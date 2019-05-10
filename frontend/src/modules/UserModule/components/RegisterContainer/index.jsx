import React, {Component} from "react";
import {connect} from "react-redux";
import RegisterForm from "../RegisterForm";
import {actions as userActions} from "../../";

class RegisterContainer extends Component {
  submit = state => {
    this.props.registerRequest({...state, token: this.props.token});
  };

  render() {
    return <RegisterForm submit={this.submit} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerRequest: ({username, email, permission, password, token}) => {
      dispatch(
        userActions.registerUserRequest({
          username,
          email,
          permission,
          password,
          token
        })
      );
    }
  };
};
const mapStateToProps = state => {
  return {
    token: state.authStore.token
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);
