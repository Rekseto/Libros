import React from "react";
import {connect} from "react-redux";

import {authLogoutRequest} from "../../actions";
import "./index.css";

export const LogoutPressable = props => {
  const clickHandler = e => {
    props.logout(props.token);
  };

  return (
    <button onClick={clickHandler} className="LogoutPressable">
      Wyloguj
    </button>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: token => dispatch(authLogoutRequest(token))
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
)(LogoutPressable);
