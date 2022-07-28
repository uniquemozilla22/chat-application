import styled from "@emotion/styled";
import { fontSize } from "@mui/system";
import React from "react";

const Button = (props) => {
  if (props.icon) return <IconButton {...props}>{props.children}</IconButton>;
  else if(props.primary) return <PrimaryButton {...props}>{props.children}</PrimaryButton>
  else return <ButtonComponent {...props}>{props.children}</ButtonComponent>;
};

const ButtonComponent = styled.button({
  padding: "1rem",
  background: "transparent",
  border: "none",
  borderRadius:"5px",
  cursor: "pointer",
  display:"flex",
  justifyContent:"center",
  gap:"1rem",
  alignItems:"center"
});

const PrimaryButton  = styled.button({
  padding: "1rem",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  borderRadius:"5px",
  color:"white",
  backgroundColor:"#2b2b2b",
  display:"flex",
  justifyContent:"center",
  gap:"1rem",
  alignItems:"center"
})

const IconButton = styled.div({
  padding: "1rem",
  background: "transparent",
  border: "none",
  borderRadius:"5px",
  cursor: "pointer",
  display:"flex",
  justifyContent:"center",
  gap:"1rem",
  alignItems:"center"
});

export default Button;
