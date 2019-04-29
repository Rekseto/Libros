import React from "react";
import {Route, Switch} from "react-router-dom";

import AppliedRoute from "./shared/AppliedRoute.jsx";
import UnauthenticatedRoute from "./shared/UnauthenticatedRoute.jsx";
import AuthenticatedRoute from "./shared/AuthenticatedRoute.jsx";

import BookScreen from "./screens/BookScreen";
import BooksScreen from "./screens/BooksScreen";
import LoginScreen from "./screens/LoginScreen";
import NotFound from "./screens/NotFound";
import ProfileScreen from "./screens/ProfileScreen";
import BookCreateScreen from "./screens/BookCreateScreen";
import PublisherCreateScreen from "./screens/PublisherCreateScreen";
import CategoryCreateScreen from "./screens/CategoryCreateScreen";
import BookEditScreen from "./screens/BookEditScreen";
import UserListScreen from "./screens/UserListScreen";
import UserScreen from "./screens/UserScreen";
import LoanListScreen from "./screens/LoanListScreen";
import AddLoanScreen from "./screens/AddLoanScreen/index.jsx";

export default props => {
  return (
    <Switch>
      <UnauthenticatedRoute
        path="/"
        exact
        to="/profile"
        props={props}
        component={LoginScreen}
      />

      <AuthenticatedRoute
        path="/profile"
        component={ProfileScreen}
        props={props}
      />

      <AuthenticatedRoute
        path="/admin/addBook"
        component={BookCreateScreen}
        props={props}
      />

      <AuthenticatedRoute
        path="/admin/editBook"
        component={BookEditScreen}
        props={props}
      />

      <AuthenticatedRoute
        path="/admin/addPublisher"
        component={PublisherCreateScreen}
        props={props}
      />

      <AuthenticatedRoute
        path="/admin/users/:page"
        component={UserListScreen}
        props={props}
      />

      <AuthenticatedRoute
        path="/admin/loans/:page"
        component={LoanListScreen}
        props={props}
      />

      <AuthenticatedRoute
        path="/admin/addLoan/:page"
        component={AddLoanScreen}
        props={props}
      />

      <AuthenticatedRoute
        path="/admin/user/:username"
        component={UserScreen}
        props={props}
      />

      <AuthenticatedRoute
        path="/admin/addCategory"
        component={CategoryCreateScreen}
        props={props}
      />

      <AppliedRoute path="/search/:page" component={BooksScreen} />
      <AppliedRoute path="/book/:isbn" component={BookScreen} />
      <Route component={NotFound} />
    </Switch>
  );
};
