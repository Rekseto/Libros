import React from "react";

import {Link} from "react-router-dom";
import "./index.css";
function User(user) {
  if (user) {
    const linkTo = `/admin/user/${user.username}`;
    return (
      <tr className="" key={user.username}>
        <th className="">{user.username}</th>
        <th className="">{user.email}</th>
        <th className="">{user.loanedBooks}</th>
        <th className="">
          <Link to={linkTo}>Więcej</Link>
        </th>
      </tr>
    );
  } else {
    return null;
  }
}
function UserListComponent({users}) {
  return (
    <table className="">
      <thead>
        <tr className="">
          <th className=" ">Nazwa</th>
          <th className=" ">E-mail</th>
          <th className=" ">Wypożyczone</th>
          <th className="" />
        </tr>
      </thead>
      <tbody>{users.map(User)}</tbody>
    </table>
  );
}

export default UserListComponent;
