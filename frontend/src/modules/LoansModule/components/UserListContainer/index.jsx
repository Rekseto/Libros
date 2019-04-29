import React, {Component} from "react";
import {connect} from "react-redux";
import {actions as usersActions} from "../../../UserModule";
import {actions as loanActions} from "../../";
import UserListComponent from "../UserListComponent";
class UserListContainer extends Component {
  componentDidMount() {
    const {page, token} = this.props;
    this.props.fetchUsers({page, token});
  }

  addLoan = username => () => {
    const {isbn, token} = this.props;

    this.props.addLoan({username, token, isbn});
  };
  render() {
    return (
      <UserListComponent users={this.props.users} addLoan={this.addLoan} />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: ({token, page}) => {
      dispatch(usersActions.fetchUsersRequest({token, page}));
    },
    addLoan: ({token, isbn, username}) => {
      dispatch(loanActions.loanAddRequest({token, isbn, username}));
    }
  };
};
const mapStateToProps = state => {
  return {
    token: state.authStore.token,
    users: state.userStore.users,
    isbn: state.booksStore.book.isbn
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);
