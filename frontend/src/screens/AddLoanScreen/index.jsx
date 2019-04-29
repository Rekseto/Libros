import React from "react";
import {withRouter} from "react-router";

import Navigation from "../../shared/Navigation";

import "./index.css";
import {UserListContainer} from "../../modules/LoansModule";

function AddLoanScreen(props) {
  return (
    <React.Fragment>
      <Navigation />
      <main className="">
        <UserListContainer page={props.match.params.page} />
      </main>
    </React.Fragment>
  );
}

export default withRouter(AddLoanScreen);
