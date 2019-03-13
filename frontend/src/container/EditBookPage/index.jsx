import React, {Component} from "react";
import {connect} from "react-redux";

import {publishersActions} from "../../state/ducks/publishers";
import {categoriesActions} from "../../state/ducks/categories";

import EditBookForm from "../../components/EditBookForm";
import Header from "../../components/Header";

import "./index.css";
import {bookActions} from "../../state/ducks/book";

class EditBookPage extends Component {
  constructor() {
    super();

    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPublishers();
  }

  submit(e, state) {
    e.preventDefault();
    const {token} = this.props;
    this.props.editBook(state, token);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="editBookPage">
          <section className="editBookPage__section">
            <EditBookForm
              submit={this.submit}
              publishers={this.props.publishers}
              categories={this.props.categories}
              book={this.props.book}
            />
          </section>
        </main>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => {
      dispatch(categoriesActions.categoriesFetchRequest());
    },
    fetchPublishers: () => {
      dispatch(publishersActions.publishersFetchRequest());
    },
    editBook: (body, token) => {
      dispatch(bookActions.bookEditRequest(body, token));
    }
  };
};
const mapStateToProps = state => {
  return {
    token: state.authStore.token,
    categories: state.categoriesStore.categories,
    publishers: state.publishersStore.publishers,
    book: state.bookStore.book
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBookPage);
