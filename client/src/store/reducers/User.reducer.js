import { REGISTER_USER } from "../Actions/Types";

const initialState = {
  token: null,
  email: null,
  name: null,
  image: null,
};

const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_USER: {
      return {
        ...state,
        ...payload,
      };
    }
    default:
      return state;
  }
};

export default UserReducer;
