import styled from "@emotion/styled";
import { Modal } from "@mui/material";
import React from "react";
import Input from "../UI/Input";

const LoginModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box></Box>
    </Modal>
  );
};

const Box = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
});

const Form = styled.form({
  padding: "1rem",
});

export default LoginModal;
