import React from "react";
import {withRouter} from "react-router";

import Navigation from "../../shared/Navigation";

import {UserListContainer} from "../../modules/LoansModule";

function AddLoanScreen(props) {
  return (
    <React.Fragment>
      <Navigation />
      <main className="main d-flex flex-column align-items-center justify-content-center">
        <UserListContainer page={props.match.params.page} {...props} />
      </main>
    </React.Fragment>
  );
}

export default withRouter(AddLoanScreen);
