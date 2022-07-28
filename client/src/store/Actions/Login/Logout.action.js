import { LOGOUT_USER } from "../Types";
import ErrorHandle from "../ErrorHandle/ErrorHandle.action";
import { hideLoading, showLoading } from "../Loader/Loader.action";

const LogoutAction = () => {
  return (dispatch) => {
    dispatch(showLoading());

    try {
      dispatch({
        type: LOGOUT_USER,
      });
      dispatch(hideLoading());
    } catch (error) {
      dispatch(ErrorHandle(error));
    }
  };
};

export default LogoutAction;
