import React from "react";
import {withRouter} from "react-router";

import Navigation from "../../shared/Navigation";
import {BooksSearchbar, BooksList} from "../../modules/BooksModule/";

import "./index.css";

function BookScreen(props) {
  return (
    <React.Fragment>
      <Navigation />
      <main className="BookScreen">
        <BooksSearchbar {...props} />
        <BooksList {...props} />
      </main>
    </React.Fragment>
  );
}

export default withRouter(BookScreen);
