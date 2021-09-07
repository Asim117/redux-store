import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const composedEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducers, composedEnhancer);
export default store;
