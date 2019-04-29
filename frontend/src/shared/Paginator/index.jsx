import React from "react";
import {Link} from "react-router-dom";
import "./index.css";
export default ({pages, searchQuery}) => {
  let query = "";
  if (searchQuery) query = searchQuery;
  return (
    <div className="paginator">
      {[...Array(Math.ceil(pages))].map((el, index) => {
        return (
          <Link
            key={index + 1}
            className="paginator"
            to={`${index + 1 + query}`}
          >
            {index + 1}
          </Link>
        );
      })}
    </div>
  );
};
