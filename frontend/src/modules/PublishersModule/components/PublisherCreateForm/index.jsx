import React, {Component} from "react";

class PublisherCreateForm extends Component {
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
      <form className="" onSubmit={e => this.props.submit(e, state)}>
        <div className="">
          <label htmlFor="name">Wydawnictwo</label>
          <input
            className=""
            type="text"
            id="name"
            name="name"
            onChange={onChange}
            value={this.state.name}
            required
          />
        </div>
        <button>Dodaj</button>
      </form>
    );
  }
}

export default PublisherCreateForm;
