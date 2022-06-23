import styled from "@emotion/styled";
import React from "react";

const Button = (props) => {
  if (props.icon) return <IconButton {...props}>{props.children}</IconButton>;
  else return <ButtonComponent {...props}>{props.children}</ButtonComponent>;
};

const ButtonComponent = styled.button({
  padding: "1rem",
  background: "transparent",
  border: "none",
  cursor: "pointer",
});

const IconButton = styled.div({
  padding: "1rem",
  background: "transparent",
  border: "none",
  cursor: "pointer",
});

export default Button;
