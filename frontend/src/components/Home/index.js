import React from "react";
import { withRouter } from "react-router";

import Header from "../Header";

import Searcher from "../../container/Searcher";
import "./index.css";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container-fluid home">
          <Searcher />
        </main>
      </div >
    );
  }
}

export default withRouter(Home);
