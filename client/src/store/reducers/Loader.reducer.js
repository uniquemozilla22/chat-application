import { HIDE_LOADER, SHOW_LOADER } from "../Actions/Types";

const initialState = false;

const LoaderReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case SHOW_LOADER:
      return true;
    case HIDE_LOADER:
      return false;
    default:
      return state;
  }
};

export default LoaderReducer;
