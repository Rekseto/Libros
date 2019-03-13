import React from "react";
import {connect} from "react-redux";

import {userActions} from "../../state/ducks/user";
import UserLoanList from "../../components/UserLoanList";
import Header from "../../components/Header";

import "./index.css";
import {loanActions} from "../../state/ducks/loan";
class UserPage extends React.Component {
  constructor() {
    super();

    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    const {username} = this.props.match.params;

    this.props.loansRequest(username);
  }

  deleteItem(id) {
    const {token} = this.props;
    const {username} = this.props.match.params;

    this.props.deleteLoanRequest({token, id, username});
  }

  render() {
    const {loans} = this.props;
    const {username} = this.props.match.params;

    return (
      <React.Fragment>
        <Header />
        <main className="main d-flex flex-column align-items-center justify-content-center">
          <h2>{username}</h2>
          <div className="profilePage__loanList">
            <UserLoanList loans={loans} deleteItem={this.deleteItem} />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loansRequest: username => dispatch(userActions.loansRequest(username)),
    deleteLoanRequest: ({token, id, username}) => {
      dispatch(loanActions.removeLoanRequest({token, id, username}));
    }
  };
};
const mapStateToProps = state => {
  return {
    token: state.authStore.token,
    loans: state.userStore.loans
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
