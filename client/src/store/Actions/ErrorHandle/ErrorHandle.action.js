import { showErrorMessage } from "../Message/Message.action";
const ErrorHandle = ({ code, message }) => {
  return (dispatch) => {
    console.log(code, message);
    dispatch(showErrorMessage(message, code));
  };
};
export default ErrorHandle;
