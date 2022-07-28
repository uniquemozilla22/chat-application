import styled from "@emotion/styled";
import {  Google } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorHandle from "../store/Actions/ErrorHandle/ErrorHandle.action";
import LoginAction from "../store/Actions/Login/Login.action";
import { hideLoginModal } from "../store/Actions/Modal/LoginModal.action";
import GoogleIcon from '@mui/icons-material/Google';
import { Heading, Paragraph } from "../UI/Headings";
import Button from "../UI/Button";

const LoginModal = () => {
  const dispatch = useDispatch();
  const [login, setLogin]= useState({
    username:"",
    password:""
  })
  const show = useSelector((state) => state.modal.login);

  const closeLoginModal = () => dispatch(hideLoginModal());

  const LoginSuccess = (code, social) => dispatch(LoginAction(code, social));

  const LoginError = (err) => dispatch(ErrorHandle(err));

  const onSubmitHandler= (e)=>{
    e.preventDefault();
  }


  return (
    <Modal open={show} onClose={closeLoginModal}>
      <Box>
        <Heading>Login</Heading>
        <Form onSubmit={onSubmitHandler}>
          <Input type="email" placeholder="Email" onChange={e=>setLogin({...login, username:e.target.value})} required/>
          <Input type="password" placeholder="Password"  onChange = {e=> setLogin({...login, password:e.target.value})} required/>
          <Button type="submit" primary>Submit</Button>
        </Form>
        <Content>
          <Heading>Social Media Login</Heading>
          <Paragraph>You can login with your account here.</Paragraph>
          <Paragraph>Dont worry you information are safe with us .</Paragraph>
        </Content>
        <ButtonsContainer>
          <Button icon><GoogleIcon/> Google</Button>
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
  width: "30vw",
  backgroundColor: "#f8f8f8",
  padding: "1rem",
  color: "#3b3e49",
  textAlign: "center",
  "@media (max-width: 800px) ":{
  width: "80vw",
    
  }
});

const Form = styled.form({
  display:"flex",
  justifyContent: "center",
  gap:"1rem",
  flexDirection:"column",
  
})

const Input = styled.input({
  padding:"1rem ",
  borderRadius:"5px",

})

const Submit  =  styled(Button,{

})

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
