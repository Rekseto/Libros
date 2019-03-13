import React, {Component} from "react";

class RegisterForm extends Component {
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
    username: "",
    isbn: 0,
    days: 0
  };

  render() {
    const {state, onChange} = this;
    return (
      <form className="addLoanForm" onSubmit={e => this.props.submit(e, state)}>
        <div className="addLoanForm__inputGroup inputGroup">
          <label htmlFor="username">Nazwa użytkownika</label>
          <input
            className="addLoanForm__textInput textInput"
            type="text"
            id="username"
            name="username"
            onChange={onChange}
            value={this.state.username}
            required
          />
        </div>

        <div className="addLoanForm__inputGroup inputGroup">
          <label htmlFor="isbn">ISBN</label>
          <input
            className="addLoanForm__textInput textInput"
            type="number"
            id="isbn"
            name="isbn"
            onChange={onChange}
            value={this.state.isbn}
            required
            min="0"
          />
        </div>

        <div className="addLoanForm__inputGroup inputGroup">
          <label htmlFor="days">Dni wypożyczenia</label>
          <input
            className="addLoanForm__textInput textInput"
            type="number"
            id="days"
            name="days"
            onChange={onChange}
            value={this.state.days}
            required
          />
        </div>

        <input
          className="addLoanForm__submit submitButton"
          type="submit"
          value="Wypożycz"
        />
      </form>
    );
  }
}

export default RegisterForm;
