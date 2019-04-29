import React from "react";
import {withRouter} from "react-router";

import Navigation from "../../shared/Navigation";
import {Book} from "../../modules/BooksModule";

import "./index.css";

function BookScreen(props) {
  return (
    <React.Fragment>
      <Navigation />
      <main className="Book">
        <Book />
      </main>
    </React.Fragment>
  );
}

export default withRouter(BookScreen);
