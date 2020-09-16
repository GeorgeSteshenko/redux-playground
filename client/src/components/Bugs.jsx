import React, { Component, Fragment } from "react";
// import StoreContext from "../contexts/storeContext";
import { loadBugs, resolveBug, getUnresolvedBugs } from "../store/bugs";
import { connect } from "react-redux";

class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs();
  }

  render() {
    return (
      <Fragment>
        <h4>List of all bugs (class component)</h4>
        <ul>
          {this.props.bugs.map((bug) => (
            <li key={bug.id}>{bug.description}</li>
          ))}
        </ul>
        <br />
        <h4>List of unresolved bugs (class component)</h4>
        <ul>
          {this.props.unresolvedBugs.map((bug) => (
            <li key={bug.id}>
              {bug.description} &nbsp;
              <button onClick={() => this.props.resolveBug(bug.id)}>
                Resolve
              </button>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  bugs: state.entities.bugs.list,
  unresolvedBugs: getUnresolvedBugs(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
  resolveBug: (id) => dispatch(resolveBug(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
