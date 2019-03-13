import React, {Component} from "react";

class RemoveBookForm extends Component {
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
    isbn: 0
  };

  render() {
    const {state, onChange} = this;
    return (
      <form
        className="removeBookForm"
        onSubmit={e => this.props.submit(e, state)}
      >
        <div className="removeBookForm__inputGroup inputGroup">
          <label htmlFor="isbn">ISBN</label>
          <input
            className="removeBookForm__textInput textInput"
            type="number"
            id="isbn"
            name="isbn"
            min="0"
            onChange={onChange}
            value={this.state.isbn}
            required
          />
        </div>

        <input
          className="removeBookForm__submit submitButton"
          type="submit"
          value="Usuń książke"
        />
      </form>
    );
  }
}

export default RemoveBookForm;
