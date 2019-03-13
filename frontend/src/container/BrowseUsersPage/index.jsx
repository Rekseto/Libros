import React, {Component} from "react";
import {connect} from "react-redux";
import Header from "../../components/Header";

import {usersActions} from "../../state/ducks/users";
import UsersTable from "../../components/UsersTable";
import Paginator from "../../components/Paginator";

class BrowseUsersPage extends Component {
  constructor() {
    super();

    this.submit = this.submit.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
  }
  componentDidMount() {
    const {page} = this.props.match.params;
    const {token} = this.props;

    this.props.fetchUsers(this.state.username, token, page);
  }

  state = {
    username: ""
  };

  changeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();

    const {page} = this.props.match.params;
    const {token} = this.props;

    this.props.fetchUsers(this.state.username, token, page);
  }

  render() {
    const {users, pages} = this.props;
    return (
      <React.Fragment>
        <Header />
        <main className="browseUsersPage d-flex justify-content-center">
          <section className="browseUsersPage__section col-8 d-flex flex-column align-items-center">
            <form onSubmit={this.submit}>
              <div className="inputGroup">
                <label htmlFor="">Nazwa użytkownika</label>
                <input
                  className="textInput"
                  type="text"
                  value={this.state.username}
                  onChange={this.changeUsername}
                />
              </div>
            </form>
            <UsersTable users={users} />

            <Paginator pages={pages} />
          </section>
        </main>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: (username, token, page) =>
      dispatch(usersActions.usersFetchRequest(username, token, page))
  };
};

const mapStateToProps = state => {
  return {
    token: state.authStore.token,
    users: state.usersStore.users,
    pages: state.usersStore.pages
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseUsersPage);
