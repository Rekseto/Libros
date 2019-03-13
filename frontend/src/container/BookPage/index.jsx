import React, {Component} from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import Header from "../../components/Header";

import "./index.css";
import {bookActions} from "../../state/ducks/book";
import {withRouter, Redirect} from "react-router-dom";
import {formatDate} from "../../helpers/dateHelper";
import AdminPanel from "../../components/AdminPanel";
class BookPage extends Component {
  constructor() {
    super();

    this.deleteBook = this.deleteBook.bind(this);
  }
  componentDidMount() {
    this.props.bookFetch(this.props.match.params.id);
  }

  state = {
    redirect: false
  };

  deleteBook(e) {
    e.preventDefault();

    this.props.removeBook({
      isbn: this.props.match.params.id,
      token: this.props.token
    });

    this.setState({
      redirect: true
    });
  }

  render() {
    const {bookData, user} = this.props;
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
    if (book.fastestTerm === "Teraz") fastestTerm = "Teraz";
    else fastestTerm = formatDate(book.fastestTerm);
    return (
      <React.Fragment>
        <Header />
        {this.state.redirect ? <Redirect to="/" /> : null}

        <main className="main bookPage d-flex flex-column align-items-center">
          <section className="bookPage__section col-12 col-lg-8">
            <header className="bookPage__header">
              <h2 className="text-center bookPage__title">{book.title}</h2>
              <p className="text-center bookPage__author">{book.author}</p>
            </header>

            <div className="d-flex flex-column align-items-center">
              <p>Data Wydania: {formatDate(book.date)}</p>
              <p>ISBN: {book.isbn}</p>
              <p>Wydawnictwo: {book.publisher.name}</p>
              <p>Kategoria: {book.category.name}</p>
              <p>W bibliotece: {book.stock}</p>
              <p>Wypożyczone: {book.loaned}</p>
              <p>Dostępna od: {fastestTerm}</p>
            </div>

            <AdminPanel deleteBook={this.deleteBook} user={user} />
          </section>
        </main>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    bookFetch: isbn => dispatch(bookActions.bookFindRequest(isbn)),
    removeBook: payload => dispatch(bookActions.bookRemoveRequest(payload))
  };
};

const mapStateToProps = state => {
  return {
    bookData: state.bookStore.book,
    token: state.authStore.token,
    user: state.authStore.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookPage)
);
