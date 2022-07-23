import { LOGOUT_USER, REGISTER_USER } from "../Actions/Types";

const initialState = {
  token: null,
  email: null,
  name: null,
  image: null,
  SocialID:null
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

    case LOGOUT_USER: {
      return {
        ...state,
        token: null,
        email: null,
        name: null,
        image: null,
        SocialID:null,
      };
    }
    default:
      return state;
  }
};

export default UserReducer;
