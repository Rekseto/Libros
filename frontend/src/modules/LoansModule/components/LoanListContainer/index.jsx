import React, {Component} from "react";
import {connect} from "react-redux";
import {actions as loansActions} from "../../";
import LoanListComponent from "../LoanListComponent";
import Paginator from "../../../../shared/Paginator";

class LoanListContainer extends Component {
  componentDidMount() {
    const {page, token} = this.props;
    this.props.fetchLoans({page, token});
  }

  render() {
    console.log(this.props.loans);
    return (
      <React.Fragment>
        <LoanListComponent loans={this.props.loans} />
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
    fetchLoans: ({token, page}) => {
      dispatch(loansActions.fetchLoansRequest({token, page}));
    }
  };
};
const mapStateToProps = state => {
  return {
    token: state.authStore.token,
    loans: state.loansStore.loans,
    pages: state.loansStore.pages
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanListContainer);
