import React from "react";
import {connect} from "react-redux";

import {userActions} from "../../state/ducks/user";
import {authActions} from "../../state/ducks/auth";

import ProfileBar from "../../components/ProfileBar";
import UserLoanList from "../../components/UserLoanList";
import Header from "../../components/Header";

import "./index.css";
import {loanActions} from "../../state/ducks/loan";
class Profile extends React.Component {
  constructor() {
    super();

    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const {username} = this.props.user;

    this.props.loansRequest(username);
  }

  logout() {
    const {logoutRequest, token} = this.props;

    logoutRequest(token);
  }

  deleteItem(id) {
    const {token} = this.props;
    const {username} = this.props.match.params;

    this.props.deleteLoanRequest({token, id, username});
  }

  render() {
    const {loans, user} = this.props;

    return (
      <React.Fragment>
        <Header />
        <main className="main d-flex flex-column flex-lg-row">
          <ProfileBar user={user} logout={this.logout} />
          <div className="profilePage__loanList">
            <UserLoanList
              user={user}
              loans={loans}
              deleteItem={this.deleteItem}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loansRequest: username => dispatch(userActions.loansRequest(username)),
    logoutRequest: token => dispatch(authActions.logoutRequest(token)),
    deleteLoanRequest: ({token, id, username}) => {
      dispatch(loanActions.removeLoanRequest({token, id, username}));
    }
  };
};

const mapStateToProps = state => {
  return {
    user: state.authStore.user,
    token: state.authStore.token,
    loans: state.userStore.loans
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
