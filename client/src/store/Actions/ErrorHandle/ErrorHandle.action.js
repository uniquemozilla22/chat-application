const ErrorHandle = (err) => {
  return (dispatch, getState) => {
    console.log(err);
  };
};
export default ErrorHandle;
