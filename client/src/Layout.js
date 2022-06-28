import React, { useState } from "react";
import LoaderComponent from "./Components/Loader.comp";
import LoginModal from "./Modals/Login.modal";
import SnackbarModal from "./Modals/Snackbar.modal";

const Layout = (props) => {
  const [loginModal, setLoginModal] = useState(true);
  return (
    <>
      <LoaderComponent />
      <SnackbarModal />
      <LoginModal open={loginModal} onClose={() => setLoginModal(false)} />
      {props.children}
    </>
  );
};

export default Layout;
