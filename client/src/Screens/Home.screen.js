import { Drawer } from "@mui/material";
import React, { useState } from "react";
import MessageBoxComponent from "../Components/Message.comp";
import SidebarComponent from "../Components/Sidebar.comp";

const HomeScreen = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div id="container">
      <SidebarComponent />
      <MessageBoxComponent openModal={() => setShowSidebar(true)} />
      <Drawer
        anchor={"left"}
        open={showSidebar}
        onClose={() => setShowSidebar(false)}
      >
        <SidebarComponent modal />
      </Drawer>
    </div>
  );
};

export default HomeScreen;
