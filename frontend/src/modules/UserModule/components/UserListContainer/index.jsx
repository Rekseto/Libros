import React, {Component} from "react";
import {connect} from "react-redux";
import {actions as usersActions} from "../../";
import UserListComponent from "../UserListComponent";
import Paginator from "../../../../shared/Paginator";

class UserListContainer extends Component {
  componentDidMount() {
    const {page, token} = this.props;
    const {username} = this.state;
    this.props.fetchUsers({page, token, username});
  }

  state = {
    username: ""
  };

  fetchUsers = e => {
    e.preventDefault();
    const {page, token} = this.props;
    const {username} = this.state;
    this.props.fetchUsers({page, token, username});
  };

  onChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.fetchUsers}>
          <input
            onChange={this.onChange}
            type="text"
            value={this.state.username}
          />
          <button>Wyszukaj</button>
        </form>
        <UserListComponent users={this.props.users} />
        <Paginator
          ns="search"
          pages={this.props.pages}
          searchQuery={this.props.location.search}
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
    pages: state.userStore.pages
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);
