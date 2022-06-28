import styled from "@emotion/styled";
import { FacebookOutlined, Google } from "@mui/icons-material";
import { Modal } from "@mui/material";
import { hasGrantedAllScopesGoogle } from "@react-oauth/google";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GoogleLoginServices from "../Services/GoogleLogin.services";
import ErrorHandle from "../store/Actions/ErrorHandle/ErrorHandle.action";
import LoginAction from "../store/Actions/Login/Login.action";
import { hideLoginModal } from "../store/Actions/Modal/LoginModal.action";
import { Heading, Paragraph } from "../UI/Headings";

const LoginModal = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.modal.login);

  const closeLoginModal = () => dispatch(hideLoginModal());

  const LoginSuccess = (code, social) => dispatch(LoginAction(code, social));

  const LoginError = (err) => dispatch(ErrorHandle(err));
  return (
    <Modal open={show} onClose={closeLoginModal}>
      <Box>
        <Content>
          <Heading>Social Media Login</Heading>
          <Paragraph>You can login with your account here.</Paragraph>
          <Paragraph>Dont worry you information are safe with us .</Paragraph>
        </Content>
        <ButtonsContainer>
          <GoogleLoginServices onSuccess={LoginSuccess} onError={LoginError}>
            <Google sx={{ fontSize: "3rem" }} />
          </GoogleLoginServices>
        </ButtonsContainer>
      </Box>
    </Modal>
  );
};

const Box = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "50vw",
  backgroundColor: "#f8f8f8",
  padding: "1rem",
  color: "#3b3e49",
  textAlign: "center",
});

const ButtonsContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  alignItems: "stretch",
});

const Content = styled.div({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  margin: "1rem 0",
});
export default LoginModal;
