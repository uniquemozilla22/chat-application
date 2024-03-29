import axios from "axios";
import { LOGIN__ROUTE } from "../routes.constant";
import Request from "../../../Services/Request.services.js";
import ErrorHandle from "../ErrorHandle/ErrorHandle.action";
import { registerUser } from "../User/Register.action";
import { hideLoginModal } from "../Modal/LoginModal.action";
import { showSuccessMessage } from "../Message/Message.action";

const LoginAction = (data) => {
  return async (dispatch) => {
    try{
      const {user} = await request(data,dispatch);
    dispatch(
      registerUser({
        token: data.access_token,
        ...user
      })
    );
    dispatch(hideLoginModal());
    }
    catch (error) {
      dispatch(ErrorHandle(error));
      return 
    }
    
  };
};

const request =  (data, dispatch) => new Request(LOGIN__ROUTE, dispatch).post({data});

export default LoginAction;
