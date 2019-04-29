import React from "react";
import {withRouter} from "react-router";

import Navigation from "../../shared/Navigation";
import {LoginContainer} from "../../modules/AuthModule/";

import "./index.css";

function LoginScreen(props) {
  return (
    <React.Fragment>
      <Navigation />
      <main className="LoginScreen">
        <div className="LoginScreen__boxContainer">
          <h2 className="LoginScreen__heading">Logowanie</h2>
          <div className="LoginScreen__row">
            <header className="LoginScreen__header">
              <img
                className="LoginScreen__headerImage"
                src="/images/avatar.svg"
                alt=""
                aria-hidden="true"
              />
              <p className="LoginScreen__headerTitle">Libros</p>
            </header>

            <LoginContainer />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default withRouter(LoginScreen);
