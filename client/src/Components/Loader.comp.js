import styled from "@emotion/styled";
import { LinearProgress, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const LoaderComponent = () => {
  const show = useSelector((state) => state.loader);
  const [loader, setLoader] = useState(show);

  useEffect(() => {
    setLoader(show);
  }, [show]);
  return (
    <Modal open={loader} disableAutoFocus keepMounted>
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
});

export default LoaderComponent;
