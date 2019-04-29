import React from "react";
import {withRouter} from "react-router";

import Navigation from "../../shared/Navigation";

import "./index.css";
import {LoanListContainer} from "../../modules/LoansModule";

function LoanListScreen(props) {
  return (
    <React.Fragment>
      <Navigation />
      <main className="">
        <LoanListContainer page={props.match.params.page} {...props} />
      </main>
    </React.Fragment>
  );
}

export default withRouter(LoanListScreen);
