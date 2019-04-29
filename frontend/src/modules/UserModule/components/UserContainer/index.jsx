import React, {Component} from "react";
import {connect} from "react-redux";
import {actions as usersActions} from "../../";
import {actions as loansActions} from "../../../LoansModule";
import UserComponent from "../UserComponent";

class UserContainer extends Component {
  componentDidMount() {
    const {token, username} = this.props;
    this.props.fetchUser({token, username});
  }

  deleteItem = id => {
    const {token, username} = this.props;
    this.props.loanRemoveRequest({id, token, username});
  };
  render() {
    return (
      <UserComponent loans={this.props.loans} deleteItem={this.deleteItem} />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: ({token, username}) => {
      dispatch(usersActions.userLoansRequest({token, username}));
    },
    loanRemoveRequest: ({token, id, username}) => {
      dispatch(loansActions.loanRemoveRequest({token, id, username}));
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
)(UserContainer);
