import React from "react";
import {withRouter} from "react-router";

import Navigation from "../../shared/Navigation";
import ErrorComponent from "../../shared/ErrorComponent";

function ErrorScreen(props) {
  return (
    <React.Fragment>
      <Navigation />
      <main className="main d-flex justify-content-center align-items-center">
        <ErrorComponent />
      </main>
    </React.Fragment>
  );
}

export default withRouter(ErrorScreen);
