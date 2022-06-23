import { LOGIN_MODAL } from "../Actions/Types";

const initialState = {
  login: false,
};

const ModalReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_MODAL:
      return {
        ...state,
        login: payload,
      };
    default:
      return state;
  }
};

export default ModalReducers;
