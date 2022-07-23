import axios from "axios";
import { LOGIN__ROUTE } from "../routes.constant";
import Request from "../../../Services/Request.services.js";
import ErrorHandle from "../ErrorHandle/ErrorHandle.action";
import { registerUser } from "../User/Register.action";
import { hideLoginModal } from "../Modal/LoginModal.action";
import { showSuccessMessage } from "../Message/Message.action";

const LoginAction = (data, social) => {
  return async (dispatch) => {
    const {user} = await request(data, social, dispatch);
    dispatch(
      registerUser({
        token: data.access_token,
        ...user
      })
    );
    dispatch(hideLoginModal());
  };
};

const request = async ({ access_token }, social, dispatch) => {
  try {
    const userInfo = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );
    return new Request(LOGIN__ROUTE, dispatch).post({
      social,
      ...userInfo.data,
    });
  } catch (error) {
    dispatch(ErrorHandle(error));
  }
};

export default LoginAction;
