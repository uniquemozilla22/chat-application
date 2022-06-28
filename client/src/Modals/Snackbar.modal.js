import React, { useState } from "react";
import { Snackbar, Alert, AlertTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideMessage } from "../store/Actions/Message/Message.action";

const SnackbarModal = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.modal.message);
  const [snackBar, setSnackBar] = useState(message.show);
  //   const [data, setData] = useState(message.data);

  const handleClose = (index) => dispatch(hideMessage(index));
  return message.data.map((alert, index) => (
    <Snackbar
      open={snackBar}
      autoHideDuration={3000}
      onClose={() => handleClose(index)}
      key={index}
    >
      <Alert
        onClose={() => handleClose(index)}
        severity={alert.type}
        sx={{ width: "100%" }}
      >
        {alert.title && <AlertTitle>{alert.title}</AlertTitle>}
        {alert.message}
      </Alert>
    </Snackbar>
  ));
};

export default SnackbarModal;
