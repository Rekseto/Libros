import React from "react";

const UserFactor = addLoan => user => {
  if (user) {
    return (
      <tr className="UserComponent__bodyCell" key={user.username}>
        <th className="UserComponent__bodyCell">{user.username}</th>
        <th className="UserComponent__bodyCell">{user.email}</th>
        <th className="UserComponent__bodyCell">{user.loanedBooks}</th>
        <th className="UserComponent__bodyCell">
          <button onClick={addLoan(user.username)} className="submit">
            Wypożycz
          </button>
        </th>
      </tr>
    );
  } else {
    return null;
  }
};
function UserListComponent({users, addLoan}) {
  return (
    <table className="UserComponent">
      <thead className="UserComponent__thead">
        <tr>
          <th className="UserComponent__headCell">Nazwa</th>
          <th className="UserComponent__headCell">E-mail</th>
          <th className="UserComponent__headCell">Wypożyczone</th>
          <th className="UserComponent__headCell" />
        </tr>
      </thead>
      <tbody>{users.map(UserFactor(addLoan))}</tbody>
    </table>
  );
}

export default UserListComponent;
