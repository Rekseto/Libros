import React, {Component} from "react";
import {connect} from "react-redux";

import {actions as categoriesActions} from "../../../CategoriesModule";
import {actions as publishersActions} from "../../../PublishersModule";
import {actions as booksActions} from "../../";
import BookEditComponent from "../BookEditComponent";

class BookEditContainer extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPublishers();
  }

  submit = (e, state) => {
    e.preventDefault();
    const {token, bookEdit} = this.props;
    bookEdit({body: state, token});
  };

  render() {
    return (
      <BookEditComponent
        submit={this.submit}
        publishers={this.props.publishers}
        categories={this.props.categories}
        book={this.props.book}
      />
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
    bookEdit: ({body, token}) => {
      dispatch(booksActions.bookEditRequest({body, token}));
    }
  };
};
const mapStateToProps = state => {
  return {
    token: state.authStore.token,
    categories: state.categoriesStore.categories,
    publishers: state.publishersStore.publishers,
    book: state.booksStore.book
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookEditContainer);
