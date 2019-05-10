import React from "react";
import {Link} from "react-router-dom";
import "./index.css";
export default ({pages, searchQuery, page}) => {
  let query = "";
  if (searchQuery) query = searchQuery;
  const PaginationItem = (el, index) => {
    const className =
      index + 1 == page
        ? "pagination__link pagination__link--selected"
        : "pagination__link";

    return (
      <Link key={index + 1} className={className} to={`${index + 1 + query}`}>
        {index + 1}
      </Link>
    );
  };

  return (
    <div className="pagination">
      {[...Array(Math.ceil(pages))].map(PaginationItem)}
    </div>
  );
};
