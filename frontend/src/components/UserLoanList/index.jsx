import React from "react";
import {formatDate, dateDiffrence} from "../../helpers/dateHelper";

import "./index.css";

const getRemainingDays = val => {
  if (val < 0) return <span className="loanList__outdated">{val}</span>;
  return <span className="">{val}</span>;
};

function Loan({loan, deleteItem}) {
  const _delete = function() {
    deleteItem(loan._id);
  };

  return (
    <tr>
      <th className="loanList__cell">{loan.title}</th>
      <th className="loanList__cell">{loan.author}</th>
      <th className="loanList__cell">{formatDate(loan.date)}</th>
      <th className="loanList__cell">{formatDate(loan.term)}</th>
      <th className="loanList__cell">
        {getRemainingDays(dateDiffrence(new Date(loan.term), new Date()))} dni
      </th>
      <th className="loanList__cell">
        <button onClick={_delete}>
          Usuń <img src="" alt="" />
        </button>
      </th>
    </tr>
  );
}

function LoanList({loans, deleteItem}) {
  return (
    <React.Fragment>
      <table className="loanList__table">
        <thead>
          <tr>
            <th className="loanList__cell">Title</th>
            <th className="loanList__cell">Autor</th>
            <th className="loanList__cell">Data wypożyczenia</th>
            <th className="loanList__cell">Data oddania</th>
            <th className="loanList__cell">Pozostało</th>
            <th className="loanList__cell" />
          </tr>
        </thead>
        <tbody>
          {loans.map(loan => (
            <Loan loan={loan} key={loan._id} deleteItem={deleteItem} />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default LoanList;
