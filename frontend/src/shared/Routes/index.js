import React from "react";
import {Route, Switch} from "react-router-dom";
import Applied from "./AppliedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Loadable from "../LoadableComponent";

const NotFound = Loadable({
  loader: () => import("../components/NotFound")
});
// Unauth
const Home = Loadable({
  loader: () => import("../components/Home")
});

const LoginPage = Loadable({
  loader: () => import("../container/LoginPage")
});

const SearchPage = Loadable({
  loader: () => import("../container/SearchPage")
});

const BookPage = Loadable({
  loader: () => import("../container/BookPage")
});

const RegisterPage = Loadable({
  loader: () => import("../container/RegisterPage")
});

// Admin route
const AddLoanPage = Loadable({
  loader: () => import("../container/AddLoanPage")
});

const AddPublisherPage = Loadable({
  loader: () => import("../container/AddPublisherPage")
});

const AddCategoryPage = Loadable({
  loader: () => import("../container/AddCategoryPage")
});

const LoansPage = Loadable({
  loader: () => import("../container/LoansPage")
});

const AddBookPage = Loadable({
  loader: () => import("../container/AddBookPage")
});

const EditBookPage = Loadable({
  loader: () => import("../container/EditBookPage")
});

const RemoveBookPage = Loadable({
  loader: () => import("../container/RemoveBookPage")
});

const BrowseUsersPage = Loadable({
  loader: () => import("../container/BrowseUsersPage")
});

const Profile = Loadable({
  loader: () => import("../container/Profile")
});

const UserPage = Loadable({
  loader: () => import("../container/UserPage")
});

export default props => {
  return (
    <Switch>
      <Applied path="/" exact component={Home} props={props} />
      <UnauthenticatedRoute
        path="/login"
        to="/profile"
        component={LoginPage}
        props={props}
      />

      <AuthenticatedRoute
        path="/admin/loan"
        component={AddLoanPage}
        props={props}
      />
      <AuthenticatedRoute
        path="/admin/addPublisher"
        component={AddPublisherPage}
        props={props}
      />
      <AuthenticatedRoute
        path="/admin/loans/:page"
        component={LoansPage}
        props={props}
      />
      <AuthenticatedRoute
        path="/admin/addBook"
        component={AddBookPage}
        props={props}
      />
      <AuthenticatedRoute
        path="/admin/removeBook"
        component={RemoveBookPage}
        props={props}
      />
      <AuthenticatedRoute
        path="/admin/users/:page"
        component={BrowseUsersPage}
        props={props}
      />
      <AuthenticatedRoute
        path="/admin/addCategory"
        component={AddCategoryPage}
        props={props}
      />
      <AuthenticatedRoute
        path="/admin/user/:username"
        component={UserPage}
        props={props}
      />

      <AuthenticatedRoute
        path="/admin/editBook/"
        component={EditBookPage}
        props={props}
      />

      <AuthenticatedRoute path="/profile" component={Profile} props={props} />

      <Applied path="/register" component={RegisterPage} props={props} />
      <Applied path="/search/:page" component={SearchPage} props={props} />
      <Applied path="/book/:id" component={BookPage} props={props} />
      <Route component={NotFound} />
    </Switch>
  );
};
