import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as R from "ramda";
import {actions as booksActions} from "../../";

import {formatDate} from "../../../../helpers/dateHelper";

import BookAdminPanel from "../BookAdminPanel";
import "./index.css";
class BookPage extends Component {
  componentDidMount() {
    this.props.bookFetch(this.props.match.params.isbn);
  }

  state = {
    redirect: false
  };

  deleteBook = () => {
    const {deleteBook, token, bookData} = this.props;
    deleteBook({token, isbn: bookData.isbn});
  };

  render() {
    const {bookData} = this.props;
    let fastestTerm;
    const book = R.mergeDeepRight(
      {
        category: {
          name: "",
          _id: ""
        },
        publisher: {
          name: "",
          _id: ""
        },
        isbn: 0,
        stock: 0,
        loaned: 0,
        title: "",
        date: new Date()
      },
      bookData
    );
    if (book.fastestTerm === "Teraz" || book.stock > book.loaned)
      fastestTerm = "Teraz";
    else fastestTerm = formatDate(book.fastestTerm);
    return (
      <React.Fragment>
        <section className="Book">
          <header className="Book__header">
            <h2 className="BookHeader__heading">{book.title}</h2>
            <p className="BookHeader__author">{book.author}</p>
          </header>

          <div className="Book__container">
            <p className="Book__paragraph">
              Data Wydania: {formatDate(book.date)}
            </p>
            <p className="Book__paragraph">ISBN: {book.isbn}</p>
            <p className="Book__paragraph">
              Wydawnictwo: {book.publisher.name}
            </p>
            <p className="Book__paragraph">Kategoria: {book.category.name}</p>
            <p className="Book__paragraph">W bibliotece: {book.stock}</p>
            <p className="Book__paragraph">Wypożyczone: {book.loaned}</p>
            <p className="Book__paragraph">Dostępna od: {fastestTerm}</p>
          </div>

          <BookAdminPanel deleteBook={this.deleteBook} />
        </section>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    bookFetch: isbn => dispatch(booksActions.bookFetchRequest({isbn})),
    deleteBook: ({isbn, token}) =>
      dispatch(booksActions.bookRemoveRequest({isbn, token}))
  };
};

const mapStateToProps = state => {
  return {
    bookData: state.booksStore.book,
    token: state.authStore.token
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookPage)
);
