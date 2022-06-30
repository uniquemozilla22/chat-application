import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import MessageBoxComponent from "../Components/Message.comp";
import SidebarComponent from "../Components/Sidebar.comp";

const HomeScreen = () => {
  const user = useSelector((state) => state.user);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div id="container">
      <SidebarComponent user={user} authenticated={user.token ? true : false} />
      <MessageBoxComponent openModal={() => setShowSidebar(true)} />
      <Drawer
        anchor={"left"}
        open={showSidebar}
        onClose={() => setShowSidebar(false)}
      >
        <SidebarComponent modal user={user} />
      </Drawer>
    </div>
  );
};

export default HomeScreen;
