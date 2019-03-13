import React, { Component } from "react";
import { connect } from "react-redux";
import { searchActions } from "../../state/ducks/search";
import { withRouter } from 'react-router-dom';
class Searcher extends Component {

  constructor() {
    super();

    this.submit = this.submit.bind(this);
  }


  submit(e) {
    e.preventDefault();
    this.props.history.push("/search/0?title=" + this.props.title);
  }


  render() {
    return (
      <section className="searcher col-xs-12 col-sm-8 col-md-6 d-flex align-items-center">
        <form className="searcher__form" onSubmit={this.submit}>

          <input
            className="searcher__input"
            type="text"
            id="title"
            value={this.props.title}
            onChange={e => this.props.change('title', e.target.value)}
          />


          <input
            className="searcher__input searcher__submit"
            type="submit"
            value="Wyszukaj"
          />
        </form>
      </section>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    change: (field, value) => dispatch(searchActions.change(field, value)),
  };
};

const mapStateToProps = state => {
  return {
    title: state.searchStore.title,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Searcher));
