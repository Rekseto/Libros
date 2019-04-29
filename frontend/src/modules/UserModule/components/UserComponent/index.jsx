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
      <th className="">{loan.title}</th>
      <th className="">{loan.author}</th>
      <th className="">{formatDate(loan.date)}</th>
      <th className="">{formatDate(loan.term)}</th>
      <th className="">
        {getRemainingDays(dateDiffrence(new Date(loan.term), new Date()))} dni
      </th>
      <th className="">
        <button onClick={_delete} className="">
          Usuń <img src="/images/trash.svg" alt="" />
        </button>
      </th>
    </tr>
  );
};

function UserComponent({loans, deleteItem}) {
  return (
    <React.Fragment>
      <table className="">
        <thead>
          <tr>
            <th className="">Title</th>
            <th className="">Autor</th>
            <th className="">Data wypożyczenia</th>
            <th className="">Data oddania</th>
            <th className="">Pozostało</th>
            <th className="" />
          </tr>
        </thead>
        <tbody>{loans.map(Loan(deleteItem))}</tbody>
      </table>
    </React.Fragment>
  );
}

export default UserComponent;
