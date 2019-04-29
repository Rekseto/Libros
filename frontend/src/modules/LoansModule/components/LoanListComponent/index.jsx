import React from "react";

import {dateDiffrence} from "../../../../helpers/dateHelper";

const getRemainingDays = val => {
  if (val < 0) return <span className="loansTable__outdated">{val}</span>;
  return <span className="">{val}</span>;
};

function Loan(loan) {
  if (loan) {
    return (
      <tr className="" key={loan._id}>
        <th className="">{loan.loaner.username}</th>
        <th className="">{loan.volume.title}</th>
        <th className="">
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
      <table className="">
        <thead>
          <tr className="">
            <th className=" ">Użytkownik</th>
            <th className="">Tytuł</th>
            <th className="">Pozostało</th>
          </tr>
        </thead>
        <tbody>{loans.map(Loan)}</tbody>
      </table>
    </React.Fragment>
  );
}

export default LoanListComponent;
