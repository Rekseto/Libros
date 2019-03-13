import React from "react";

import {dateDiffrence} from "../../helpers/dateHelper";
import "./index.css";
const getRemainingDays = val => {
  if (val < 0) return <span className="loansTable__outdated">{val}</span>;
  return <span className="">{val}</span>;
};

function Loan({loan}) {
  if (loan) {
    return (
      <tr className="">
        <th className="loansTable__cell">{loan.loaner.username}</th>
        <th className="loansTable__cell">{loan.volume.title}</th>
        <th className="loansTable__cell">
          {getRemainingDays(dateDiffrence(new Date(loan.term), new Date()))} dni
        </th>
      </tr>
    );
  } else {
    return null;
  }
}
function LoansTable({loans}) {
  return (
    <React.Fragment>
      <table className="loansTable">
        <thead>
          <tr className="loansTable__tr">
            <th className="loansTable__cell loansTable__headCell">
              Użytkownik
            </th>
            <th className="loansTable__cell loansTable__headCell">Tytuł</th>
            <th className="loansTable__cell loansTable__headCell">Pozostało</th>
          </tr>
        </thead>
        <tbody>
          {loans.map(loan => (
            <Loan loan={loan} />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default LoansTable;
