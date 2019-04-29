import React from "react";
import {withRouter} from "react-router";

import Navigation from "../../shared/Navigation";

import "./index.css";
import {UserListContainer} from "../../modules/UserModule";

function UserListScreen(props) {
  return (
    <React.Fragment>
      <Navigation />
      <main className="">
        <UserListContainer page={props.match.params.page} {...props} />
      </main>
    </React.Fragment>
  );
}

export default withRouter(UserListScreen);
