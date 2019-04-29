import React, {Component} from "react";
const Select = excludeName => element => {
  if (element.name !== excludeName) {
    return (
      <option key={element._id} value={element._id}>
        {element.name}
      </option>
    );
  }
};

class BookEditComponent extends Component {
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.setState({
      ...this.props.book
    });
  }

  state = {
    title: "",
    author: "",
    publisher: "",
    category: "",
    date: new Date(),
    isbn: 0,
    stock: 1
  };

  render() {
    const {state, onChange} = this;
    const {book} = this.props;
    return (
      <form className="" onSubmit={e => this.props.submit(e, state)}>
        <div className=" ">
          <label forHtml="isbn">ISBN</label>
          <input
            className=" "
            id="isbn"
            name="isbn"
            type="number"
            min="0"
            value={this.state.isbn}
            onChange={onChange}
            required
          />
        </div>

        <div className=" ">
          <label forHtml="title">Tytuł</label>
          <input
            className=" "
            id="title"
            name="title"
            type="text"
            value={this.state.title}
            onChange={onChange}
            required
          />
        </div>

        <div className=" ">
          <label forHtml="author">Autor</label>
          <input
            className=" "
            id="author"
            name="author"
            type="text"
            value={this.state.author}
            onChange={onChange}
            required
          />
        </div>

        <div className=" ">
          <label forHtml="stock">Egzemplarzy</label>
          <input
            className=" "
            id="stock"
            name="stock"
            type="number"
            value={this.state.stock}
            onChange={onChange}
            min="1"
            required
          />
        </div>

        <div className=" ">
          <label forHtml="date">Rok</label>
          <input
            className=" "
            id="date"
            type="date"
            name="date"
            value={new Date(this.state.date).toISOString().substr(0, 10)}
            onChange={onChange}
            required
          />
        </div>

        <div className=" ">
          <label className="" htmlFor="publisher">
            Wydawnictwo
          </label>
          <select
            name="publisher"
            id="publisher"
            className=" "
            onChange={onChange}
          >
            <option value={book.publisher._id}>{book.publisher.name}</option>
            {this.props.publishers.map(Select(book.publisher.name))}
          </select>
        </div>

        <div className="">
          <label htmlFor="category">Kategorie</label>
          <select
            name="category"
            id="category"
            className=" "
            onChange={onChange}
          >
            <option value={book.category._id}>{book.category.name}</option>
            {this.props.categories.map(Select(book.category.name))}
          </select>
        </div>

        <button className="">Edytuj książke</button>
      </form>
    );
  }
}

export default BookEditComponent;
