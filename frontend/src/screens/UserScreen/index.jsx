import React from "react";
import {withRouter} from "react-router";

import Navigation from "../../shared/Navigation";
import {UserContainer} from "../../modules/UserModule";
import "./index.css";

function UserScreen(props) {
  const username = props.match.params.username;

  return (
    <React.Fragment>
      <Navigation />
      <main className="main d-flex flex-column align-items-center justify-content-center">
        <UserContainer username={username} />
      </main>
    </React.Fragment>
  );
}

export default withRouter(UserScreen);
