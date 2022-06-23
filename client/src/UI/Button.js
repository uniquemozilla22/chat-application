import styled from "@emotion/styled";
import React from "react";

export const Button = (props) => {
  if (props.icon) return <IconButton {...props}>{props.children}</IconButton>;
  else return <ButtonComponent {...props}>{props.children}</ButtonComponent>;
};

const ButtonComponent = styled.button({
  padding: "1rem",
});

const IconButton = styled.div({});
