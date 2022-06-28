import styled from "@emotion/styled";
import { LinearProgress, Modal } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const LoaderComponent = () => {
  const show = useSelector((state) => state.loader);
  const [loader, setLoader] = useState(show);
  return (
    <Modal open={loader} disableAutoFocus>
      <Top>
        <LinearProgress color="inherit" />
      </Top>
    </Modal>
  );
};

const Top = styled.div({
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  color: "#6fbced",
});

export default LoaderComponent;
