import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {actions as booksActions} from "../../";
import "./index.css";
import BookComponent from "../BookComponent";
class BookPage extends Component {
  componentDidMount() {
    this.props.bookFetch(this.props.match.params.isbn);
  }

  deleteBook = () => {
    const {deleteBook, token, bookData} = this.props;
    deleteBook({token, isbn: bookData.isbn});
  };

  render() {
    return (
      <BookComponent deleteBook={this.deleteBook} book={this.props.book} />
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
    book: state.booksStore.book,
    token: state.authStore.token
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookPage)
);
