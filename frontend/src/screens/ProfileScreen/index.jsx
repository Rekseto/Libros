import React from "react";
import {withRouter} from "react-router";

import Navigation from "../../shared/Navigation";

import "./index.css";
import {ProfileBar, ProfileLoansList} from "../../modules/ProfileModule";
function ProfileScreen(props) {
  const {user} = props;
  return (
    <React.Fragment>
      <Navigation />
      <main className="ProfileScreen">
        <ProfileBar user={user} />
        <ProfileLoansList username={user.username} />
      </main>
    </React.Fragment>
  );
}

export default withRouter(ProfileScreen);
