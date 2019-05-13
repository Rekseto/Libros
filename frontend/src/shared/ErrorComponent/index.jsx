import React from "react";
import {Link} from "react-router-dom";

import "./index.css";
function ErrorComponent({}) {
  return (
    <div className="ErrorComponent">
      <h2 className="ErrorComponent__heading">Wystąpił błąd</h2>
      <p className="ErrorComponent__paragraph">
        W trakcie działania strony wystąpił błąd, proszę skontaktować się z
        Administratorem serwisu.
      </p>
      <Link to="/" className="ErrorComponent__link">
        Powrót do strony głównej
      </Link>
    </div>
  );
}

export default ErrorComponent;
