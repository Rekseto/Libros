import React, {Component} from "react";

class AddBookForm extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
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

  render() {
    const {state, onChange} = this;
    return (
      <form
        className="addBookPage__form"
        onSubmit={e => this.props.submit(e, state)}
      >
        <div className="addBookPage__inputGroup inputGroup">
          <label forHtml="isbn">ISBN</label>
          <input
            className="addBookPage__input textInput"
            id="isbn"
            name="isbn"
            type="number"
            min="0"
            value={this.state.isbn}
            onChange={onChange}
            required
          />
        </div>

        <div className="addBookPage__inputGroup inputGroup">
          <label forHtml="title">Tytuł</label>
          <input
            className="addBookPage__input textInput"
            id="title"
            name="title"
            type="text"
            value={this.state.title}
            onChange={onChange}
            required
          />
        </div>

        <div className="addBookPage__inputGroup inputGroup">
          <label forHtml="author">Autor</label>
          <input
            className="addBookPage__input textInput"
            id="author"
            name="author"
            type="text"
            value={this.state.author}
            onChange={onChange}
            required
          />
        </div>

        <div className="addBookPage__inputGroup inputGroup">
          <label forHtml="stock">Egzemplarzy</label>
          <input
            className="addBookPage__input textInput"
            id="stock"
            name="stock"
            type="number"
            value={this.state.stock}
            onChange={onChange}
            min="1"
            required
          />
        </div>

        <div className="addBookPage__inputGroup inputGroup">
          <label forHtml="date">Rok</label>
          <input
            className="addBookPage__input textInput"
            id="date"
            type="date"
            name="date"
            value={this.state.date}
            onChange={onChange}
            required
          />
        </div>

        <div className="addBookPage__inputGroup inputGroup">
          <label className="searchPage__label" htmlFor="publisher">
            Wydawnictwo
          </label>
          <select
            name="publisher"
            id="publisher"
            className="addBookPage__input textInput"
            onChange={onChange}
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

        <div className="addBookPage__inputGroup inputGroup">
          <label htmlFor="category">Kategorie</label>
          <select
            name="category"
            id="category"
            className="addBookPage__input textInput"
            onChange={onChange}
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

        <input className="submitButton" type="submit" value="Dodaj książke" />
      </form>
    );
  }
}

export default AddBookForm;
