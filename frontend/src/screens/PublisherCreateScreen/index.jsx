import React from "react";
import {withRouter} from "react-router";

import Navigation from "../../shared/Navigation";
import {PublisherCreateContainer} from "../../modules/PublishersModule";
import "./index.css";

function PublisherCreateScreen(props) {
  return (
    <React.Fragment>
      <Navigation />
      <main className="main d-flex justify-content-center align-items-center">
        <PublisherCreateContainer />
      </main>
    </React.Fragment>
  );
}

export default withRouter(PublisherCreateScreen);
