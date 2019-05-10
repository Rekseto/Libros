import React, {Component} from "react";
import {connect} from "react-redux";
import queryString from "querystring";
import * as R from "ramda";

import {actions as usersActions} from "../../../UserModule";
import {actions as loanActions} from "../../";
import UserListComponent from "../UserListComponent";
import Paginator from "../../../../shared/Paginator";
import UsernameSearch from "../../../../shared/UsernameSearch";

class UserListContainer extends Component {
  componentDidMount() {
    this.fetchUsers(this.getPayload());

    const searchString = `${this.props.location.search}`.slice(1);
    const searchObject = queryString.parse(searchString);

    this.setState({
      username: searchObject.username
    });
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.location.search !== this.props.location.search ||
      prevProps.match.params.page !== this.props.match.params.page
    ) {
      this.fetchUsers(this.getPayload());
    }
  }

  state = {
    username: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getPayload = () => {
    const {token} = this.props;
    const page = Number.parseInt(this.props.match.params.page);

    const searchString = `${this.props.location.search}`.slice(1);
    const searchObject = queryString.parse(searchString);
    return R.mergeLeft(
      R.assoc("token", token, searchObject),
      R.assoc("page", page, searchObject),
      R.pick(["username"], this.state)
    );
  };

  fetchUsers(payload = {}) {
    this.props.fetchUsers(payload);
  }

  addLoan = username => () => {
    const {isbn, token} = this.props;

    this.props.addLoan({username, token, isbn});
    this.fetchUsers(this.getPayload());
  };

  submit = e => {
    e.preventDefault();
    this.props.history.push(
      `1?${queryString.stringify(R.pick(["username"], this.state))}`
    );
  };

  render() {
    return (
      <React.Fragment>
        <UsernameSearch
          submit={this.submit}
          change={this.change}
          value={this.state.username}
        />
        <UserListComponent users={this.props.users} addLoan={this.addLoan} />
        <Paginator
          ns="search"
          pages={this.props.pages}
          searchQuery={this.props.location.search}
          page={this.props.paginationPage}
        />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: ({token, page, username}) => {
      dispatch(usersActions.fetchUsersRequest({token, page, username}));
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
    isbn: state.booksStore.book.isbn,
    pages: state.userStore.pages,
    paginationPage: state.userStore.page
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);
