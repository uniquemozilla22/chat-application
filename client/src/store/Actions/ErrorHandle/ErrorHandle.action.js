import { hideLoading } from "../Loader/Loader.action";
import { showErrorMessage } from "../Message/Message.action";
const ErrorHandle = ({ code, message, status }) => {
  return (dispatch) => {
    dispatch(hideLoading());
    dispatch(showErrorMessage(message, code + " " + status));
  };
};
export default ErrorHandle;
