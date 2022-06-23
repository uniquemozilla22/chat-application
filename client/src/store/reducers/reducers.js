import ModalReducers from "./Modal.reducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
  modal: ModalReducers,
});

export default reducers;
