import React from "react";
import {withRouter} from "react-router";

import Navigation from "../../shared/Navigation";
import {PublisherCreateContainer} from "../../modules/PublishersModule";

function BookScreen(props) {
  return (
    <React.Fragment>
      <Navigation />
      <main className="Book">
        <PublisherCreateContainer />
      </main>
    </React.Fragment>
  );
}

export default withRouter(BookScreen);
