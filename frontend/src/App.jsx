import * as React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import {actions as authActions} from "./modules/AuthModule";
import Routes from "./Routes";

class App extends React.Component {
  componentDidMount() {
    this.props.checkLogged();
  }

  render() {
    const {isLogged, user} = this.props;

    return (
      <React.Fragment>
        <ToastContainer />
        <Routes isLogged={isLogged} user={user} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLogged: state.authStore.isLogged,
  user: state.authStore.user
});

const mapDispatchToProps = dispatch => ({
  checkLogged: () => dispatch(authActions.authVerifyRequest())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
