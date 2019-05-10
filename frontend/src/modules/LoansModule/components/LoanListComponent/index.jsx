import React from "react";

import {dateDiffrence} from "../../../../helpers/dateHelper";
import "./index.css";

const getRemainingDays = val => {
  if (val < 0) return <span className="loansTable__outdated">{val}</span>;
  return <span className="">{val}</span>;
};

function Loan(loan) {
  if (loan) {
    return (
      <tr className="" key={loan._id}>
        <th className="LoanList__bodyCell">{loan.loaner.username}</th>
        <th className="LoanList__bodyCell">{loan.volume.title}</th>
        <th className="LoanList__bodyCell">
          {getRemainingDays(dateDiffrence(new Date(loan.term), new Date()))} dni
        </th>
      </tr>
    );
  } else {
    return null;
  }
}
function LoanListComponent({loans}) {
  return (
    <React.Fragment>
      <table className="LoanList">
        <thead>
          <tr className="">
            <th className="LoanList__headCell">Użytkownik</th>
            <th className="LoanList__headCell">Tytuł</th>
            <th className="LoanList__headCell">Pozostało</th>
          </tr>
        </thead>
        <tbody>{loans.map(Loan)}</tbody>
      </table>
    </React.Fragment>
  );
}

export default LoanListComponent;
