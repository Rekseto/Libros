import React, {Component} from "react";
import {connect} from "react-redux";

import {actions as categoriesActions} from "../../";

import "./index.css";
import CategoryCreateForm from "../CategoryCreateForm";

function Category(category, deleteCategory, token) {
  function remove() {
    deleteCategory(token, category._id);
  }

  return (
    <li className="CategoryCreateContainer__element">
      <span className="">{category.name}</span>
      <button onClick={remove} className="CategoryCreateContainer__submit">
        Usuń
      </button>
    </li>
  );
}

class CategoryCreateContainer extends Component {
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
      <div className="CategoryCreateContainer">
        <h2 className="CategoryCreateContainer__heading">Dodaj kategorie</h2>
        <CategoryCreateForm submit={this.submit} />
        <ul className="CategoryCreateContainer__list">
          {categories.map(category =>
            Category(category, deleteCategory, token)
          )}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCategory: (token, name) => {
      dispatch(categoriesActions.categoryCreateRequest({token, name}));
    },
    fetchCategories: () => {
      dispatch(categoriesActions.categoriesFetchRequest());
    },
    deleteCategory: (token, id) => {
      dispatch(categoriesActions.categoryRemoveRequest({token, id}));
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
)(CategoryCreateContainer);
