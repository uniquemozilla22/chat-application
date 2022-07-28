

import { LOGIN__ROUTE } from "../routes.constant";
import Request from "../../../Services/Request.services.js";
import ErrorHandle from "../ErrorHandle/ErrorHandle.action";
import { registerUser } from "../User/Register.action";
import { hideLoginModal } from "../Modal/LoginModal.action";
import { showSuccessMessage } from "../Message/Message.action";

const LoginAction = (data) => {
  return async (dispatch) => {
    const {user} = await request(data, dispatch);
    dispatch(
      registerUser({
        token: data.access_token,
        ...user
      })
    );
    dispatch(hideLoginModal());
  };
};

const request = async ( data, dispatch) => {
  try {
    return new Request(LOGIN__ROUTE, dispatch).post({
      data
    });
  } catch (error) {
    dispatch(ErrorHandle(error));
  }
};

export default LoginAction;
