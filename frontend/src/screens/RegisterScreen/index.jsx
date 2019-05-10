import React from "react";
import {withRouter} from "react-router";

import Navigation from "../../shared/Navigation";
import "./index.css";
import {RegisterContainer} from "../../modules/UserModule";

function RegisterScreen(props) {
  return (
    <React.Fragment>
      <Navigation />
      <main className="main d-flex flex-column align-items-center justify-content-center">
        <h2>Rejestracja Użytkownika</h2>
        <RegisterContainer {...props} />
      </main>
    </React.Fragment>
  );
}

export default withRouter(RegisterScreen);
