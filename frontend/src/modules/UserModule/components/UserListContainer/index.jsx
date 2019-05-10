import React, {Component} from "react";
import {connect} from "react-redux";
import {actions as usersActions} from "../../";
import UserListComponent from "../UserListComponent";
import Paginator from "../../../../shared/Paginator";
import UsernameSearch from "../../../../shared/UsernameSearch";
import queryString from "querystring";
import * as R from "ramda";

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

  submit = username => {
    const {page, token} = this.props;

    this.props.fetchUsers({page, token, username});
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.location.search !== this.props.location.search ||
      prevProps.match.params.page !== this.props.match.params.page
    ) {
      this.fetchUsers(this.getPayload());
    }
  }

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
        <UserListComponent users={this.props.users} />
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
    }
  };
};
const mapStateToProps = state => {
  return {
    token: state.authStore.token,
    users: state.userStore.users,
    pages: state.userStore.pages,
    paginationPage: state.userStore.page
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);
