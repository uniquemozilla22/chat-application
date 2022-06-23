import styled from "@emotion/styled";
import React from "react";

const Input = (props) => {
  return <InputComp {...props} />;
};

const InputComp = styled.input({
  padding: "1rem",
});

export default Input;
