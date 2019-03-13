import React, {Component} from "react";
import {connect} from "react-redux";
import * as R from "ramda";
import PropTypes from "prop-types";
import queryString from "querystring";

import Header from "../../components/Header";
import BooksList from "../../components/BooksList";
import Paginator from "../../components/Paginator";
import SearchForm from "../../components/SearchForm";

import {searchActions} from "../../state/ducks/search";
import {booksActions} from "../../state/ducks/books";
import {categoriesActions} from "../../state/ducks/categories";

import "./index.css";
import {publishersActions} from "../../state/ducks/publishers";

class SearchPage extends Component {
  constructor() {
    super();

    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    this.fetchBooks(this.getSearchPayload());
    this.props.fetchCategories();
    this.props.fetchPublishers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.fetchBooks(this.getSearchPayload());
    }
  }

  getSearchPayload() {
    const {page} = this.props.match.params;
    const searchString = `${this.props.location.search}`.slice(1);
    const searchObject = queryString.parse(searchString);

    return R.mergeLeft(
      R.assoc("page", page, searchObject),
      R.pick(["isbn", "author", "publisher", "title", "category"], this.props)
    );
  }

  fetchBooks(payload = {}) {
    this.props.fetchBooks(payload);
  }

  submit(e) {
    e.preventDefault();
    this.props.history.push(
      `0?${queryString.stringify(
        R.pick(["isbn", "author", "publisher", "title", "category"], this.props)
      )}`
    );
  }

  render() {
    const {books, pages, change} = this.props;
    const searchFormProps = R.pick(
      ["isbn", "author", "publisher", "title", "categories", "publishers"],
      this.props
    );
    return (
      <React.Fragment>
        <Header />
        <main className="container-fluid">
          <section className="d-flex flex-column align-items-center">
            <div className="searchPage">
              <h2 className="searchPage__heading">Wyszukiwarka</h2>
              <SearchForm
                change={change.bind(this)}
                submit={this.submit}
                {...searchFormProps}
              />
            </div>
            <div className="searchPage__booksList d-flex flex-column align-items-center">
              <BooksList books={books} />

              <Paginator
                ns="search"
                pages={pages}
                searchQuery={this.props.location.search}
              />
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

SearchPage.propTypes = {
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
    change: (field, value) => dispatch(searchActions.change(field, value)),
    fetchBooks: ({page, isbn, author, title, publisher, category}) => {
      dispatch(
        booksActions.booksRequest({
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
    isbn: state.searchStore.isbn,
    author: state.searchStore.author,
    title: state.searchStore.title,
    publisher: state.searchStore.publisher,
    category: state.searchStore.category,
    books: state.booksStore.books,
    pages: state.booksStore.pages,
    categories: state.categoriesStore.categories,
    publishers: state.publishersStore.publishers
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
