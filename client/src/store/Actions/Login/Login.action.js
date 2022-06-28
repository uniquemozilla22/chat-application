import axios from "axios";
import axiosBase from "../../../axiosBase";
import ErrorHandle from "../ErrorHandle/ErrorHandle.action";
import { hideLoading, showLoading } from "../Loader/Loader.action";
import { LOGIN__ROUTE } from "../routes.constant";

const LoginAction = (data, social) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const res = await request(data, social);
      dispatch(hideLoading());
      return res.data;
    } catch (error) {
      dispatch(ErrorHandle(error));
    }
  };
};

const request = async ({ access_token }, social) => {
  const userInfo = await axios.get(
    "https://www.googleapis.com/oauth2/v3/userinfo",
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );
  return axiosBase.post(LOGIN__ROUTE, { social, ...userInfo.data });
};

export default LoginAction;
