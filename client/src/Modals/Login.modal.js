import styled from "@emotion/styled";
import { FacebookOutlined, Google } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SocialMediaLoginServices from "../Services/SocialMediaLogin.services";
import { hideLoginModal } from "../store/Actions/Modal/LoginModal.action";
import { Heading, Paragraph } from "../UI/Headings";

const LoginModal = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.modal.login);

  const closeLoginModal = () => dispatch(hideLoginModal());
  return (
    <Modal open={show} onClose={closeLoginModal}>
      <Box>
        <Content>
          <Heading>Social Media Login</Heading>
          <Paragraph>You can login with your account here.</Paragraph>
          <Paragraph>Dont worry you information are safe with us .</Paragraph>
        </Content>
        <ButtonsContainer>
          <SocialMediaLoginServices
            provider="google"
            appId={
              "305475816603-uker4f6kv58hkem9p4oa9qrvmqgu0vc9.apps.googleusercontent.com"
            }
            onLoginSuccess={() => console.log("success")}
            onLoginFailure={() => console.log("error")}
          >
            <Google sx={{ fontSize: "3rem" }} />
          </SocialMediaLoginServices>

          <SocialMediaLoginServices
            provider="facebook"
            appId={"350729067044245"}
            onLoginSuccess={() => console.log("success")}
            onLoginFailure={() => console.log("error")}
          >
            <FacebookOutlined sx={{ fontSize: "3rem" }} />
          </SocialMediaLoginServices>
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
});
export default LoginModal;
