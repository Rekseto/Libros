import React, {Component} from "react";
import {connect} from "react-redux";

import BookCreateForm from "../BookCreateForm";
import {actions as publishersActions} from "../../../PublishersModule";
import {actions as categoriesActions} from "../../../CategoriesModule";
import {actions as booksActions} from "../../";

import "./index.css";
class AddBookPage extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPublishers();
  }

  submit = (e, state) => {
    e.preventDefault();
    this.props.createBook(state, this.props.token);
  };

  render() {
    return (
      <React.Fragment>
        <BookCreateForm
          submit={this.submit}
          publishers={this.props.publishers}
          categories={this.props.categories}
        />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBook: (payload, token) =>
      dispatch(booksActions.bookCreateRequest(payload, token)),
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
    token: state.authStore.token,
    categories: state.categoriesStore.categories,
    publishers: state.publishersStore.publishers
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBookPage);
