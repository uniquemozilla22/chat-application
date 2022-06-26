import reducers from "./reducers/reducers";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
