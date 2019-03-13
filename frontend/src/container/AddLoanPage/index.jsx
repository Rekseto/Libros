import React, {Component} from "react";
import {connect} from "react-redux";
import Header from "../../components/Header";
import AddLoanForm from "../../components/AddLoanForm";
import "./index.css";
import {loanActions} from "../../state/ducks/loan";
class AddLoanPage extends Component {
  constructor() {
    super();

    this.submit = this.submit.bind(this);
  }

  submit(e, state) {
    e.preventDefault();
    this.props.addLoan({...state, token: this.props.token});
  }

  render() {
    const {book} = this.props;
    return (
      <React.Fragment>
        <Header />
        <main className="addLoanPage">
          <section className="addLoanPage__section">
            <AddLoanForm isbn={book.isbn} submit={this.submit} />
          </section>
        </main>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addLoan: payload => dispatch(loanActions.addLoanRequest(payload))
  };
};

const mapStateToProps = state => {
  return {
    token: state.authStore.token,
    book: state.bookStore.book
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddLoanPage);
