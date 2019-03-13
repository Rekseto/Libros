import React, {Component} from "react";

class AddPublisherForm extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
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
        className="addPublisherForm"
        onSubmit={e => this.props.submit(e, state)}
      >
        <div className="addPublisherForm__inputGroup inputGroup">
          <label htmlFor="name">Wydawnictwo</label>
          <input
            className="addPublisherForm__textInput textInput"
            type="text"
            id="name"
            name="name"
            onChange={onChange}
            value={this.state.name}
            required
          />
        </div>

        <input
          className="addPublisherForm__submit submitButton"
          type="submit"
          value="Dodaj wydawnictwo"
        />
      </form>
    );
  }
}

export default AddPublisherForm;
