import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import MessageBoxComponent from "../Components/Message.comp";
import SidebarComponent from "../Components/Sidebar.comp";
import Socket from "../Services/Socket.services";

const HomeScreen = () => {
  const user = useSelector((state) => state.user);
  const [showSidebar, setShowSidebar] = useState(false);

  // const socket = new Socket()

  const sendMessage = (message) => {
    // socket.sendMessage(message)
  }

  // const Mesage = () => console.log(socket.getMessage())

  // console.log(socket.getMessage())

  return (
    <div id="container">
      <SidebarComponent user={user} authenticated={user.token ? true : false} />
      <MessageBoxComponent openModal={() => setShowSidebar(true)} sendMessage={sendMessage} />
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
