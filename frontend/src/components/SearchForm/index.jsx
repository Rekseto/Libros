import React, {Component} from "react";

class SearchForm extends Component {
  constructor() {
    super();

    this.change = this.change.bind(this);
  }

  change(e) {
    this.props.change(e.target.name, e.target.value);
  }
  render() {
    return (
      <form
        className="searchPage__form d-flex flex-column flex-sm-column flex-xl-row"
        onSubmit={this.props.submit}
      >
        <div className="searchPage__inputGroup">
          <label className="searchPage__label" htmlFor="author">
            Autor
          </label>
          <input
            className="searchPage__input"
            type="text"
            id="author"
            name="author"
            value={this.props.author}
            onChange={this.change}
          />
        </div>

        <div className="searchPage__inputGroup">
          <label className="searchPage__label" htmlFor="isbn">
            ISBN
          </label>
          <input
            className="searchPage__input"
            type="number"
            id="isbn"
            name="isbn"
            value={this.props.isbn}
            onChange={this.change}
          />
        </div>

        <div className="searchPage__inputGroup">
          <label className="searchPage__label" htmlFor="title">
            Tytuł
          </label>
          <input
            className="searchPage__input"
            type="text"
            id="title"
            name="title"
            value={this.props.title}
            onChange={this.change}
          />
        </div>

        <div className="searchPage__inputGroup">
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

        <div className="searchPage__inputGroup">
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

        <input className="searchPage__submit" type="submit" value="Wyszukaj" />
      </form>
    );
  }
}

export default SearchForm;
