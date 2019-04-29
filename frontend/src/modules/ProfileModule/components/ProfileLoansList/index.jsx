import React from "react";
import {formatDate, dateDiffrence} from "../../../../helpers/dateHelper";
import {actions as usersActions} from "../../../UserModule";
import {connect} from "react-redux";

import "./index.css";

const getRemainingDays = val => {
  if (val < 0) return <span className="">{val}</span>;
  return <span className="">{val}</span>;
};

function Loan(loan) {
  return (
    <tr key={loan._id}>
      <th className="ProfileLoansList__bodyCell">{loan.title}</th>
      <th className="ProfileLoansList__bodyCell">{loan.author}</th>
      <th className="ProfileLoansList__bodyCell">{formatDate(loan.date)}</th>
      <th className="ProfileLoansList__bodyCell">{formatDate(loan.term)}</th>
      <th className="ProfileLoansList__bodyCell">
        {getRemainingDays(dateDiffrence(new Date(loan.term), new Date()))} dni
      </th>
    </tr>
  );
}

class ProfileLoansList extends React.Component {
  componentDidMount() {
    const {username, token} = this.props;

    this.props.fetchLoans({username, token});
  }

  deleteItem = id => {
    const {token} = this.props;

    const {username} = this.props;

    this.props.deleteLoanRequest({token, id, username});
  };

  render() {
    const {loans} = this.props;
    return (
      <table className="ProfileLoansList">
        <thead className="ProfileLoansList__thead">
          <tr>
            <th className="ProfileLoansList__headCell">Title</th>
            <th className="ProfileLoansList__headCell">Autor</th>
            <th className="ProfileLoansList__headCell">Data wypożyczenia</th>
            <th className="ProfileLoansList__headCell">Data oddania</th>
            <th className="ProfileLoansList__headCell">Pozostało</th>
          </tr>
        </thead>
        <tbody>{loans.map(Loan)}</tbody>
      </table>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLoans: ({token, username}) => {
      dispatch(usersActions.userLoansRequest({token, username}));
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
)(ProfileLoansList);
