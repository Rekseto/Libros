import React, {Component} from "react";
import {connect} from "react-redux";
import Header from "../../components/Header";
import AddPublisherForm from "../../components/AddPublisherForm";
import {publishersActions} from "../../state/ducks/publishers";

import "./index.css";

function Publisher(publisher, deletePublisher, token) {
  function remove() {
    deletePublisher(token, publisher._id);
  }

  return (
    <li className="addPublisherPage__publisher">
      <span className="addPublisherPage__publisherName">{publisher.name}</span>
      <button
        onClick={remove}
        className="addPublisherPage__submitButton submitButton"
      >
        Usuń
      </button>
    </li>
  );
}

class AddPublisherPage extends Component {
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
      <React.Fragment>
        <Header />
        <main className="addPublisherPage">
          <section className="addPublisherPage__section">
            <h2>Dodaj wydawnictwo</h2>
            <AddPublisherForm submit={this.submit} />
            <ul className="addPublisherPage__list">
              {publishers.map(publisher =>
                Publisher(publisher, deletePublisher, token)
              )}
            </ul>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPublisher: (token, name) => {
      dispatch(publishersActions.publishersAddRequest(token, name));
    },
    fetchPublishers: () => {
      dispatch(publishersActions.publishersFetchRequest());
    },
    deletePublisher: (token, id) => {
      dispatch(publishersActions.publishersRemoveRequest(token, id));
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
)(AddPublisherPage);
