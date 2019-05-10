import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {formatDate} from "../../../../helpers/dateHelper";
import Paginator from "../../../../shared/Paginator";

import "./index.css";

function Book(book) {
  if (book) {
    const linkTo = `/book/${book.isbn}`;
    return (
      <tr className="BooksList__tr" key={book._id}>
        <th className="BooksList__cell BooksList__bodyCell  BooksList__title">
          {book.title}
        </th>
        <th className="BooksList__cell BooksList__bodyCell">{book.author}</th>
        <th className="BooksList__cell BooksList__bodyCell">
          {book.publisher.name}
        </th>
        <th className="BooksList__cell BooksList__bodyCell">
          {formatDate(book.date)}
        </th>
        <th className="BooksList__cell BooksList__bodyCell">
          {book.category.name}
        </th>
        <th className="BooksList__cell BooksList__bodyCell">
          {book.stock} sztuk
        </th>
        <th className="BooksList__cell BooksList__bodyCell">
          {book.loaned} sztuk
        </th>
        <th className="BooksList__cell BooksList__bodyCell">
          <Link to={linkTo} className="BooksList__link">
            Więcej
          </Link>
        </th>
      </tr>
    );
  } else {
    return null;
  }
}
class BooksList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <table className="BooksList">
          <thead className="BooksList__thead">
            <tr className="BooksList__tr">
              <th className="BooksList__cell BooksList__headCell ">Tytuł</th>
              <th className="BooksList__cell BooksList__headCell">Autor</th>
              <th className="BooksList__cell BooksList__headCell">
                Wydawnictwo
              </th>
              <th className="BooksList__cell BooksList__headCell">
                Data Wydania
              </th>
              <th className="BooksList__cell BooksList__headCell">Kategoria</th>
              <th className="BooksList__cell BooksList__headCell">
                W Bibliotece
              </th>
              <th className="BooksList__cell BooksList__headCell">
                Wypożyczone
              </th>
              <th className="BooksList__cell" />
            </tr>
          </thead>
          <tbody>{this.props.books.map(Book)}</tbody>
        </table>

        <Paginator
          ns="search"
          pages={this.props.pages}
          searchQuery={this.props.location.search}
          page={this.props.page}
        />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {
    books: state.booksStore.books,
    pages: state.booksStore.pages,
    page: state.booksStore.page
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksList);
