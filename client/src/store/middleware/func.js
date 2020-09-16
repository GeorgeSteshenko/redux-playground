// Thunk-wize middleware to do an API calls, basically run a function in a dispatch method
const func = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === "function") action(dispatch, getState);
  else next(action);
};
