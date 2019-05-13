import React from "react";
import {connect} from "react-redux";
import * as R from "ramda";

import "./index.css";

function loadingWrapper(dataSelector, WrappedComponent) {
  const mapStatetoProps = state => {
    return {
      loadingData: dataSelector(state)
    };
  };
  return connect(mapStatetoProps)(
    class extends React.Component {
      render() {
        const {loadingData} = this.props;

        if (R.isEmpty(loadingData)) {
          return (
            <div className="LoaderContainer">
              <h2 className="LoaderContainer__heading">Ładowanie</h2>
              <img
                className="LoaderContainer__spinner"
                src="/images/loading-mark.svg"
                alt=""
                aria-hidden="true"
              />
            </div>
          );
        } else {
          return <WrappedComponent {...this.props} />;
        }
      }
    }
  );
}

export default loadingWrapper;
