import React from "react";
import "./index.css";
import {formatDate} from "../../helpers/dateHelper";
import {Link} from "react-router-dom";

function Book(book) {
  if (book) {
    const linkTo = `/book/${book.isbn}`;
    return (
      <tr className="booksList__tr" key={book._id}>
        <th className="booksList__cell booksList__bodyCell  booksList__title">
          {book.title}
        </th>
        <th className="booksList__cell booksList__bodyCell">{book.author}</th>
        <th className="booksList__cell booksList__bodyCell">
          {book.publisher.name}
        </th>
        <th className="booksList__cell booksList__bodyCell">
          {formatDate(book.date)}
        </th>
        <th className="booksList__cell booksList__bodyCell">
          {book.category.name}
        </th>
        <th className="booksList__cell booksList__bodyCell">
          {book.stock} sztuk
        </th>
        <th className="booksList__cell booksList__bodyCell">
          {book.loaned} sztuk
        </th>
        <th className="booksList__cell booksList__bodyCell">
          <Link to={linkTo}>Więcej</Link>
        </th>
      </tr>
    );
  } else {
    return null;
  }
}
function BooksList({books}) {
  return (
    <React.Fragment>
      <table className="booksList__table">
        <thead>
          <tr className="booksList__tr">
            <th className="booksList__cell booksList__headCell ">Tytuł</th>
            <th className="booksList__cell booksList__headCell">Autor</th>
            <th className="booksList__cell booksList__headCell">Wydawnictwo</th>
            <th className="booksList__cell booksList__headCell">
              Data Wydania
            </th>
            <th className="booksList__cell booksList__headCell">Kategoria</th>
            <th className="booksList__cell booksList__headCell">
              W Bibliotece
            </th>
            <th className="booksList__cell booksList__headCell">Wypożyczone</th>
            <th className="booksList__cell" />
          </tr>
        </thead>
        <tbody>{books.map(Book)}</tbody>
      </table>
    </React.Fragment>
  );
}

export default BooksList;
