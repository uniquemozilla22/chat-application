import reducers from "./reducers/reducers";
import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { CookieStorage } from "redux-persist-cookie-storage";
import Cookies from "cookies-js";

const persistConfig = {
  key: "root",
  whitelist: "user",
  storage: new CookieStorage(Cookies),
};

const persistedReducer = persistReducer(persistConfig, reducers);
let store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export let persistor = persistStore(store);

export default store;
