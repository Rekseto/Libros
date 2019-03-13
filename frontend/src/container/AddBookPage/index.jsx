import React, {Component} from "react";
import {connect} from "react-redux";

import {publishersActions} from "../../state/ducks/publishers";
import {categoriesActions} from "../../state/ducks/categories";
import {bookActions} from "../../state/ducks/book";

import AddBookForm from "../../components/AddBookForm";
import Header from "../../components/Header";
import "./index.css";
class AddBookPage extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPublishers();
  }

  state = {
    title: "",
    author: "",
    publisher: "",
    category: "",
    date: "",
    isbn: 0,
    stock: 1
  };

  onChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  submit(e, state) {
    e.preventDefault();
    this.props.addBook(state, this.props.token);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="addBookPage">
          <section className="addBookPage__section">
            <AddBookForm
              submit={this.submit}
              publishers={this.props.publishers}
              categories={this.props.categories}
            />
          </section>
        </main>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBook: (payload, token) =>
      dispatch(bookActions.bookCreateRequest(payload, token)),
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
