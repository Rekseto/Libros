import React from "react";
import {formatDate, dateDiffrence} from "../../../../helpers/dateHelper";

import "./index.css";

const getRemainingDays = val => {
  if (val < 0) return <span className="loanList__outdated">{val}</span>;
  return <span className="">{val}</span>;
};

const Loan = deleteItem => loan => {
  const _delete = function() {
    deleteItem(loan._id);
  };

  return (
    <tr key={loan._id}>
      <th className="UserComponent__bodyCell">{loan.title}</th>
      <th className="UserComponent__bodyCell">{loan.author}</th>
      <th className="UserComponent__bodyCell">{formatDate(loan.date)}</th>
      <th className="UserComponent__bodyCell">{formatDate(loan.term)}</th>
      <th className="UserComponent__bodyCell">
        {getRemainingDays(dateDiffrence(new Date(loan.term), new Date()))} dni
      </th>
      <th className="UserComponent__bodyCell">
        <button onClick={_delete} className="submit submit--danger ">
          Usuń{" "}
          <img
            src="/images/trash.svg"
            alt=""
            aria-hidden="true"
            className="UserComponent__trash"
          />
        </button>
      </th>
    </tr>
  );
};

function UserComponent({loans, deleteItem}) {
  return (
    <table className="UserComponent">
      <thead className="UserComponent__thead">
        <tr>
          <th className="UserComponent__headCell">Title</th>
          <th className="UserComponent__headCell">Autor</th>
          <th className="UserComponent__headCell">Data wypożyczenia</th>
          <th className="UserComponent__headCell">Data oddania</th>
          <th className="UserComponent__headCell">Pozostało</th>
          <th className="UserComponent__headCell" />
        </tr>
      </thead>
      <tbody>{loans.map(Loan(deleteItem))}</tbody>
    </table>
  );
}

export default UserComponent;
