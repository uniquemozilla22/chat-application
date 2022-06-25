import axiosBase from "../../../axiosBase";
import ErrorHandle from "../ErrorHandle/ErrorHandle.action";
import { LOGIN__ROUTE } from "../routes.constant";

const LoginAction = (data) => {
  return async (dispatch, getState) => {
    try {
      const response = await request(data);
      console.log(response);
    } catch (error) {
      ErrorHandle(error);
    }
  };
};

const request = (data) => {
  return axiosBase.post(LOGIN__ROUTE, { data });
};

export default LoginAction;
