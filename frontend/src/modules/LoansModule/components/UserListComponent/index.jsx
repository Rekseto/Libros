import React from "react";

const UserFactor = addLoan => user => {
  if (user) {
    const linkTo = `/admin/user/${user.username}`;

    return (
      <tr className="" key={user.username}>
        <th className="">{user.username}</th>
        <th className="">{user.email}</th>
        <th className="">{user.loanedBooks}</th>
        <th className="">
          <button onClick={addLoan(user.username)}>Wypożycz</button>
        </th>
      </tr>
    );
  } else {
    return null;
  }
};
function UserListComponent({users, addLoan}) {
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
      <tbody>{users.map(UserFactor(addLoan))}</tbody>
    </table>
  );
}

export default UserListComponent;
