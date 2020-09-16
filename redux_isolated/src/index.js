import configureStore from "./store/configureStore";
import {
  getUnresolvedBugs,
  getBugsByUser,
  loadBugs,
  addBug,
  resolveBug,
  assignBugToUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

store.dispatch(loadBugs());

setTimeout(() => {
  store.dispatch(assignBugToUser(1, 4));
}, 2000);

// store.dispatch(loadBugs());

// setTimeout(() => store.dispatch(resolveBug(1)), 2000);

// store.dispatch(addBug({ description: "test" }));

// store.dispatch(loadBugs());

// setTimeout(() => store.dispatch(loadBugs()), 2000);

// store.dispatch({
//   type: "apiCallBegan",
//   payload: {
//     url: "/bugs",
//     onSuccess: "bugsReceived",
//     onError: "apiCallFailed",
//   },
// });

// store.dispatch({
//   type: "error",
//   payload: {
//     message: "An error occurred",
//   },
// });

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed", store.getState());
// });

// store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));

// store.dispatch(bugAdded({ description: "Bug #1 from actionCreators" }));
// store.dispatch(bugAdded({ description: "Bug #2" }));
// store.dispatch(bugAdded({ description: "Bug #3" }));

// store.dispatch(bugAssignedToUser({ bugId: 2, userId: 1 }));

// store.dispatch(bugResolved({ id: 1 }));
// // unsubscribe();

// store.dispatch(bugRemoved({ id: 1 }));

// store.dispatch(projectAdded({ name: "Project 1" }));

// console.log(store.getState());

// const unresolvedBugs = getUnresolvedBugs(store.getState());
// console.log(unresolvedBugs);

// const bugsByUser = getBugsByUser(1)(store.getState());
// console.log(bugsByUser);
