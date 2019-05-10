import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import queryString from "querystring";
import * as R from "ramda";

import {actions as categoriesActions} from "../../../CategoriesModule";
import {actions as publishersActions} from "../../../PublishersModule";
import {actions as booksActions} from "../../../BooksModule";

class BooksSearchBar extends Component {
  state = {
    title: "",
    isbn: "",
    category: "",
    publisher: "",
    author: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.fetchBooks(this.getSearchPayload());
    this.props.fetchCategories();
    this.props.fetchPublishers();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.location.search !== this.props.location.search ||
      prevProps.match.params.page !== this.props.match.params.page
    ) {
      this.fetchBooks(this.getSearchPayload());
    }
  }

  getSearchPayload() {
    const page = Number.parseInt(this.props.match.params.page);
    const searchString = `${this.props.location.search}`.slice(1);
    const searchObject = queryString.parse(searchString);

    return R.mergeLeft(
      R.assoc("page", page, searchObject),
      R.pick(["isbn", "author", "publisher", "title", "category"], this.state)
    );
  }

  fetchBooks(payload = {}) {
    this.props.fetchBooks(payload);
  }

  submit = e => {
    e.preventDefault();
    this.props.history.push(
      `1?${queryString.stringify(
        R.pick(["isbn", "author", "publisher", "title", "category"], this.state)
      )}`
    );
  };

  state = {
    author: "",
    isbn: "",
    title: "",
    category: "",
    publisher: ""
  };

  change(e) {
    this.props.change(e.target.name, e.target.value);
  }
  render() {
    return (
      <form className="BooksSearchbar" onSubmit={this.submit}>
        <div className="inputGroup">
          <label className="searchPage__label" htmlFor="author">
            Autor
          </label>
          <input
            className="searchPage__input"
            type="text"
            id="author"
            name="author"
            value={this.state.author}
            onChange={this.change}
          />
        </div>

        <div className="inputGroup">
          <label className="searchPage__label" htmlFor="isbn">
            ISBN
          </label>
          <input
            className="searchPage__input"
            type="number"
            id="isbn"
            name="isbn"
            value={this.state.isbn}
            onChange={this.change}
          />
        </div>

        <div className="inputGroup">
          <label className="searchPage__label" htmlFor="title">
            Tytuł
          </label>
          <input
            className="searchPage__input"
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.change}
          />
        </div>

        <div className="inputGroup">
          <label className="searchPage__label" htmlFor="category">
            Kategorie
          </label>
          <select
            className="searchPage__input"
            name="category"
            id="category"
            onChange={this.change}
          >
            <option value="" />
            {this.props.categories.map(category => {
              return (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="inputGroup">
          <label className="searchPage__label" htmlFor="publisher">
            Wydawnictwo
          </label>
          <select
            className="searchPage__input"
            name="publisher"
            id="publisher"
            onChange={this.change}
          >
            <option value="" />
            {this.props.publishers.map(publisher => {
              return (
                <option key={publisher._id} value={publisher._id}>
                  {publisher.name}
                </option>
              );
            })}
          </select>
        </div>

        <button className="submit" type="submit">
          Wyszukaj
        </button>
      </form>
    );
  }
}

BooksSearchBar.propTypes = {
  change: PropTypes.func,
  fetchBooks: PropTypes.func,
  author: PropTypes.string,
  publisher: PropTypes.string,
  title: PropTypes.string,
  books: PropTypes.array,
  pages: PropTypes.number,
  isbn: PropTypes.number
};
const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: ({page, isbn, author, title, publisher, category}) => {
      dispatch(
        booksActions.booksFetchRequest({
          page,
          isbn,
          author,
          title,
          publisher,
          category
        })
      );
    },
    fetchCategories: () => {
      dispatch(categoriesActions.categoriesFetchRequest());
    },
    fetchPublishers: () => {
      dispatch(publishersActions.publishersFetchRequest());
    }
  };
};

const mapStateToProps = state => {
  return {
    books: state.booksStore.books,
    pages: state.booksStore.pages,
    categories: state.categoriesStore.categories,
    publishers: state.publishersStore.publishers
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksSearchBar);
