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

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      const {page, token} = this.props;
      this.props.fetchLoans({page, token});
    }
  }

  render() {
    return (
      <React.Fragment>
        <LoanListComponent loans={this.props.loans} />
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
    fetchLoans: ({token, page}) => {
      dispatch(loansActions.fetchLoansRequest({token, page}));
    }
  };
};
const mapStateToProps = state => {
  return {
    token: state.authStore.token,
    loans: state.loansStore.loans,
    pages: state.loansStore.pages,
    paginationPage: state.loansStore.page
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanListContainer);
