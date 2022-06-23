import { LOGIN_MODAL } from "../Types";

export const ShowLoginModal = () => {
  return {
    type: LOGIN_MODAL,
    payload: true,
  };
};

export const hideLoginModal = () => {
  return {
    type: LOGIN_MODAL,
    payload: false,
  };
};
