import React from "react";
import {connect} from "react-redux";
import {loansActions} from "../../state/ducks/loans";
import Header from "../../components/Header";
import LoansTable from "../../components/LoansTable";

class LoansPage extends React.Component {
  componentDidMount() {
    const {loansRequest, token} = this.props;
    const {page} = this.props.match.params;

    loansRequest(token, page);
  }

  render() {
    const {loans} = this.props;
    return (
      <React.Fragment>
        <Header />
        <main className="main d-flex flex-column flex-lg-row align-items-center justify-content-center">
          <LoansTable loans={loans} />
        </main>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loansRequest: (token, page) => {
      dispatch(loansActions.fetchLoansRequest(token, page));
    }
  };
};

const mapStateToProps = state => {
  return {
    loans: state.loansStore.loans
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoansPage);
