import React, {Component} from "react";
import {connect} from "react-redux";
import Header from "../../components/Header";
import AddCategoryForm from "../../components/AddCategoryForm";

import "./index.css";
import {categoriesActions} from "../../state/ducks/categories";

function Category(category, deleteCategory, token) {
  function remove() {
    deleteCategory(token, category._id);
  }

  return (
    <li className="addCategoryPage__category">
      <span className="addCategoryPage__categoryName">{category.name}</span>
      <button
        onClick={remove}
        className="addCategoryPage__submitButton submitButton"
      >
        Usuń
      </button>
    </li>
  );
}

class AddCategoryPage extends Component {
  constructor() {
    super();

    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  submit(e, state) {
    e.preventDefault();
    const {token} = this.props;
    this.props.addCategory(token, state.name);
  }

  render() {
    const {categories, deleteCategory, token} = this.props;
    return (
      <React.Fragment>
        <Header />
        <main className="addCategoryPage">
          <section className="addCategoryPage__section">
            <h2>Dodaj kategorię</h2>
            <AddCategoryForm submit={this.submit} />
            <ul className="addCategoryPage__list">
              {categories.map(category =>
                Category(category, deleteCategory, token)
              )}
            </ul>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCategory: (token, name) => {
      dispatch(categoriesActions.categoriesAddRequest(token, name));
    },
    fetchCategories: () => {
      dispatch(categoriesActions.categoriesFetchRequest());
    },
    deleteCategory: (token, id) => {
      dispatch(categoriesActions.categoriesRemoveRequest(token, id));
    }
  };
};

const mapStateToProps = state => {
  return {
    token: state.authStore.token,
    categories: state.categoriesStore.categories
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCategoryPage);
