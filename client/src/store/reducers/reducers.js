import ModalReducers from "./Modal.reducers";
import { combineReducers } from "redux";
import LoaderReducer from "./Loader.reducer";

const reducers = combineReducers({
  modal: ModalReducers,
  loader: LoaderReducer,
});

export default reducers;
