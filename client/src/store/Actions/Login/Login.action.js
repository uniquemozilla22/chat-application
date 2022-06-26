import axios from "axios";
import axiosBase from "../../../axiosBase";
import ErrorHandle from "../ErrorHandle/ErrorHandle.action";
import { LOGIN__ROUTE } from "../routes.constant";

const LoginAction = (data, social) => {
  return async (dispatch, getState) => {
    try {
      console.log(data);
      const response = await request(data, social);
      console.log(data);
      console.log("response", response);
      return data;
    } catch (error) {
      console.log({ error });
      ErrorHandle(error);
    }
  };
};

const request = async ({ access_token }, social) => {
  try {
    const userInfo = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );
    return axiosBase.post("authenticate/login", { social, ...userInfo.data });
  } catch (error) {
    ErrorHandle(error);
  }
};

export default LoginAction;
