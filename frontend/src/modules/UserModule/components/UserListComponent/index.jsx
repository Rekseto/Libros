import React from "react";

import {Link} from "react-router-dom";
import "./index.css";
function User(user) {
  if (user) {
    const linkTo = `/admin/user/${user.username}`;
    return (
      <tr className="UserList__bodyTr" key={user.username}>
        <th className="UserList__bodyCell">{user.username}</th>
        <th className="UserList__bodyCell">{user.email}</th>
        <th className="UserList__bodyCell">{user.loanedBooks}</th>
        <th className="UserList__bodyCell">
          <Link className="UserList__linkTo" to={linkTo}>
            Więcej
          </Link>
        </th>
      </tr>
    );
  } else {
    return null;
  }
}
function UserListComponent({users}) {
  return (
    <table className="UserList">
      <thead>
        <tr className="UserList__headTr">
          <th className="UserList__headCell">Nazwa</th>
          <th className="UserList__headCell">E-mail</th>
          <th className="UserList__headCell">Wypożyczone</th>
          <th className="UserList__headCell" />
        </tr>
      </thead>
      <tbody>{users.map(User)}</tbody>
    </table>
  );
}

export default UserListComponent;
