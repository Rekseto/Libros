import React from "react";
import {withRouter} from "react-router";

import Navigation from "../../shared/Navigation";
import {BookEditContainer} from "../../modules/BooksModule";

function BookScreen(props) {
  return (
    <React.Fragment>
      <Navigation />
      <main className="Book">
        <BookEditContainer />
      </main>
    </React.Fragment>
  );
}

export default withRouter(BookScreen);
