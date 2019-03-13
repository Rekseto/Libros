import React from "react";
import {Link} from "react-router-dom";
import "./index.css";
export default ({pages, searchQuery}) => {
  let query = "";
  if (searchQuery) query = searchQuery;
  return (
    <div className="paginator">
      {[...Array(pages)].map((el, index) => {
        return (
          <Link key={index} className="paginator" to={`${index + query}`}>
            {index}
          </Link>
        );
      })}
    </div>
  );
};
