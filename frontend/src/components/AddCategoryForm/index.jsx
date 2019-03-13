import React, {Component} from "react";

class AddCategoryForm extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      isbn: this.props.isbn
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  state = {
    name: ""
  };

  render() {
    const {state, onChange} = this;
    return (
      <form
        className="addCategoryForm"
        onSubmit={e => this.props.submit(e, state)}
      >
        <div className="addCategoryForm__inputGroup inputGroup">
          <label htmlFor="name">Kategoria</label>
          <input
            className="addCategoryForm__textInput textInput"
            type="text"
            id="name"
            name="name"
            onChange={onChange}
            value={this.state.name}
            required
          />
        </div>

        <input
          className="addCategoryForm__submit submitButton"
          type="submit"
          value="Dodaj kategorie"
        />
      </form>
    );
  }
}

export default AddCategoryForm;
