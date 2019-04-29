import React, {Component} from "react";

function Select(element) {
  return (
    <option key={element._id} value={element._id}>
      {element.name}
    </option>
  );
}

class BookCreateForm extends Component {
  submit = e => {
    this.props.submit(e, this.state);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

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
      <form className="BookCreateForm" onSubmit={this.submit}>
        <div className="inputGroup">
          <label forHtml="isbn">ISBN</label>
          <input
            className="textInput"
            id="isbn"
            name="isbn"
            type="number"
            min="0"
            value={this.state.isbn}
            onChange={onChange}
            required
          />
        </div>
        <div className="inputGroup">
          <label forHtml="title">Tytuł</label>
          <input
            className="textInput"
            id="title"
            name="title"
            type="text"
            value={this.state.title}
            onChange={onChange}
            required
          />
        </div>

        <div className="inputGroup">
          <label forHtml="author">Autor</label>
          <input
            className="textInput"
            id="author"
            name="author"
            type="text"
            value={this.state.author}
            onChange={onChange}
            required
          />
        </div>

        <div className="inputGroup">
          <label forHtml="stock">Egzemplarzy</label>
          <input
            className="textInput"
            id="stock"
            name="stock"
            type="number"
            value={this.state.stock}
            onChange={onChange}
            min="1"
            required
          />
        </div>
        <div className="inputGroup">
          <label forHtml="date">Rok</label>
          <input
            className="textInput"
            id="date"
            type="date"
            name="date"
            value={this.state.date}
            onChange={onChange}
            required
          />
        </div>

        <div className="inputGroup">
          <label className="" htmlFor="publisher">
            Wydawnictwo
          </label>
          <select
            name="publisher"
            id="publisher"
            className="textInput"
            onChange={onChange}
          >
            <option value="" />
            {this.props.publishers.map(Select)}
          </select>
        </div>

        <div className="inputGroup">
          <label htmlFor="category">Kategorie</label>
          <select
            name="category"
            id="category"
            className="textInput"
            onChange={onChange}
          >
            <option value="" />
            {this.props.categories.map(Select)}
          </select>
        </div>
        <div className="inputGroup">
          <button className="submit">Dodaj książke</button>
        </div>
      </form>
    );
  }
}

export default BookCreateForm;
