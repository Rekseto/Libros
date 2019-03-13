import React, {Component} from "react";
import Header from "../Header";

class ErrorPage extends React.Component {
  componentWillUnmount() {
    this.props.errorClear();
  }
  render() {
    const error = {...this.props.bookCreateError,...this.props.userLoansError};
    return (
      <div>
        <Header />
        <main className="errorPage">
        <h2>{error.httpStatus}</h2>
        <p>{error.userMessage}</p>
        </main>
      </div>
    );
  }
}

export default ErrorPage;
