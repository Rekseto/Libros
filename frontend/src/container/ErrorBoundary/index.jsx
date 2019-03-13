import * as React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";

import { errorActions } from '../../state/ducks/error';
import ErrorPage from '../../components/ErrorPage';

class ErrorBoundary extends React.Component {

  render() {

    const {bookCreateError, userLoansError} = this.props;
    if(bookCreateError || userLoansError) {
      return <ErrorPage {...this.props} />;
    } else {
      return this.props.children;
    }

  }
}

const mapStateToProps = state => ({
  userLoansError: state.userStore.error,
  bookCreateError: state.bookStore.error
});

const mapDispatchToProps = dispatch => ({
  errorClear: () => dispatch(errorActions.errorClear())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorBoundary));
