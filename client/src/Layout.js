import React, { useState } from "react";
import LoginModal from "./Modals/Login.modal";

const Layout = (props) => {
  const [loginModal, setLoginModal] = useState(true);
  return (
    <>
      <LoginModal open={loginModal} onClose={() => setLoginModal(false)} />
      {props.children}
    </>
  );
};

export default Layout;
