import React from "react";
import {withRouter} from "react-router";

import Navigation from "../../shared/Navigation";
import {CategoryCreateContainer} from "../../modules/CategoriesModule";

function BookScreen(props) {
  return (
    <React.Fragment>
      <Navigation />
      <main className="Book">
        <CategoryCreateContainer />
      </main>
    </React.Fragment>
  );
}

export default withRouter(BookScreen);
