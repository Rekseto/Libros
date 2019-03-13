import React from "react";

import {Link} from "react-router-dom";
import "./index.css";
function User({user}) {
  if (user) {
    const linkTo = `/admin/user/${user.username}`;
    return (
      <tr className="">
        <th className="usersTable__cell">{user.username}</th>
        <th className="usersTable__cell">{user.email}</th>
        <th className="usersTable__cell">{user.loanedBooks}</th>
        <th className="bookList__more">
          <Link to={linkTo}>Więcej</Link>
        </th>
      </tr>
    );
  } else {
    return null;
  }
}
function UsersTable({users}) {
  return (
    <React.Fragment>
      <table className="usersTable">
        <thead>
          <tr className="usersTable__tr">
            <th className="usersTable__cell usersTable__headCell">Nazwa</th>
            <th className="usersTable__cell usersTable__headCell">E-mail</th>
            <th className="usersTable__cell usersTable__headCell">
              Wypożyczone
            </th>
            <th className="" />
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <User user={user} key={user.username} />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default UsersTable;
