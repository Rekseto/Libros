import React from "react";
import {connect} from "react-redux";

function renderIfAdmin(WrappedComponent) {
  const mapStateToProps = state => {
    return {
      user: state.authStore.user
    };
  };

  return connect(
    mapStateToProps,
    null
  )(
    class extends React.Component {
      render() {
        if (this.props.user.permission === "admin") {
          return <WrappedComponent {...this.props} />;
        } else {
          return null;
        }
      }
    }
  );
}

export default renderIfAdmin;
