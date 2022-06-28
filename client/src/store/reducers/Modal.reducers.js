import {
  LOGIN_MODAL,
  SHOW_MESSAGE_MODAL,
  HIDE_MESSAGE_MODAL,
} from "../Actions/Types";

const initialState = {
  login: false,
  message: {
    show: true,
    data: [],
  },
};

const ModalReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_MODAL:
      return {
        ...state,
        login: payload,
      };
    case SHOW_MESSAGE_MODAL: {
      return {
        ...state,
        message: {
          ...state.message,
          show: true,
          data: [...state.message.data, payload.data],
        },
      };
    }

    case HIDE_MESSAGE_MODAL: {
      return { ...state, message: { ...state.message, show: false, data: [] } };
    }
    default:
      return state;
  }
};

export default ModalReducers;
