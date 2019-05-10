import React, {Component} from "react";
import {connect} from "react-redux";

import {actions as publishersActions} from "../../";

import "./index.css";
import PublisherCreateForm from "../PublisherCreateForm";

function Publisher(publisher, deletePublisher, token) {
  function remove() {
    deletePublisher(token, publisher._id);
  }

  return (
    <li className="PublisherCreateContainer__element">
      <span className="">{publisher.name}</span>
      <button onClick={remove} className="PublisherCreateContainer__submit">
        Usuń
      </button>
    </li>
  );
}

class PublisherCreateContainer extends Component {
  constructor() {
    super();

    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    this.props.fetchPublishers();
  }

  submit(e, state) {
    e.preventDefault();
    const {token} = this.props;
    this.props.addPublisher(token, state.name);
  }

  render() {
    const {publishers, deletePublisher, token} = this.props;
    return (
      <div className="PublisherCreateContainer">
        <h2 className="PublisherCreateContainer__heading">Dodaj wydawnictwo</h2>
        <PublisherCreateForm submit={this.submit} />
        <ul className="PublisherCreateContainer__list">
          {publishers.map(publisher =>
            Publisher(publisher, deletePublisher, token)
          )}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPublisher: (token, name) => {
      dispatch(publishersActions.publisherCreateRequest({token, name}));
    },
    fetchPublishers: () => {
      dispatch(publishersActions.publishersFetchRequest());
    },
    deletePublisher: (token, id) => {
      dispatch(publishersActions.publisherRemoveRequest({token, id}));
    }
  };
};

const mapStateToProps = state => {
  return {
    token: state.authStore.token,
    publishers: state.publishersStore.publishers
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublisherCreateContainer);
