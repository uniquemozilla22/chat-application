import React, { useState } from "react";
import LoginModal from "./Modals/Login.modal";
import SnackbarModal from "./Modals/Snackbar.modal";

const Layout = (props) => {
  const [loginModal, setLoginModal] = useState(true);
  return (
    <>
      <SnackbarModal />
      <LoginModal open={loginModal} onClose={() => setLoginModal(false)} />
      {props.children}
    </>
  );
};

export default Layout;
