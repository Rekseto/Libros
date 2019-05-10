import React, {Component} from "react";

class CategoryCreateForm extends Component {
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  state = {
    name: ""
  };

  render() {
    const {state, onChange} = this;
    return (
      <form
        className="CategoryCreateForm"
        onSubmit={e => this.props.submit(e, state)}
      >
        <div className="inputGroup d-flex flex-row">
          <label htmlFor="name" className="label">
            Kategoria
          </label>
          <input
            className="textInput"
            type="text"
            id="name"
            name="name"
            onChange={onChange}
            value={this.state.name}
            required
          />
        </div>
        <button className="submit">Dodaj</button>
      </form>
    );
  }
}

export default CategoryCreateForm;
