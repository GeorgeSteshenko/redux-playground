import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBugs, getUnresolvedBugs, resolveBug } from "../store/bugs";

const BugsList = () => {
  const dispatch = useDispatch();
  // To select specific state/store slice
  const bugs = useSelector((state) => state.entities.bugs.list);
  const unresolvedBugs = useSelector(getUnresolvedBugs);

  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  return (
    <Fragment>
      <h4>List of all bugs (fn component)</h4>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>{bug.description}</li>
        ))}
      </ul>
      <br />
      <h4>List of unresolved bugs (fn component)</h4>
      <ul>
        {unresolvedBugs.map((bug) => (
          <li key={bug.id}>
            {bug.description} &nbsp;
            <button onClick={() => dispatch(resolveBug(bug.id))}>
              Resolve
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default BugsList;
