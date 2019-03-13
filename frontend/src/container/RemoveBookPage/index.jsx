import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../../components/Header";
import RemoveBookForm from "../../components/RemoveBookForm";

import "./index.css";
import { bookActions } from '../../state/ducks/book';

class RemoveBookPage extends Component {

  constructor() {
    super();

    this.submit = this.submit.bind(this);
  }

  submit(e, state) {
    e.preventDefault();
    this.props.removeBook({ ...state, token: this.props.token });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="removeBookPage">
          <section className="removeBookPage__section">
            <RemoveBookForm submit={this.submit} />
          </section>
        </main>
      </React.Fragment>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    removeBook: (payload) => dispatch(bookActions.bookRemoveRequest(payload))
  };
};

const mapStateToProps = state => {
  return {
    token: state.authStore.token
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveBookPage);
