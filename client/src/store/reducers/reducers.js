import ModalReducers from "./Modal.reducers";
import { combineReducers } from "redux";
import LoaderReducer from "./Loader.reducer";
import UserReducer from "./User.reducer";

const reducers = combineReducers({
  user: UserReducer,
  modal: ModalReducers,
  loader: LoaderReducer,
});

export default reducers;
