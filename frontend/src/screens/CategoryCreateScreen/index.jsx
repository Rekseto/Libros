import React from "react";
import {withRouter} from "react-router";

import Navigation from "../../shared/Navigation";
import {CategoryCreateContainer} from "../../modules/CategoriesModule";

function CategoryCreateScreen(props) {
  return (
    <React.Fragment>
      <Navigation />
      <main className="main d-flex justify-content-center align-items-center">
        <CategoryCreateContainer />
      </main>
    </React.Fragment>
  );
}

export default withRouter(CategoryCreateScreen);
