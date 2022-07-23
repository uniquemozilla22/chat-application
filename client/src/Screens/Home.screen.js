import { Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MessageBoxComponent from "../Components/Message.comp";
import SidebarComponent from "../Components/Sidebar.comp";
import Socket from "../Services/Socket.services";

const HomeScreen = () => {
  const user = useSelector((state) => state.user);
  const [showSidebar, setShowSidebar] = useState(false);
  const [messages, setMessages]= useState([])

  const socket = new Socket()

  const sendMessage = (message) => {
    socket.sendMessage({message, by:user.SocialID, time:new Date().toDateString() })
  }

  // const Mesage = () => console.log(socket.getMessage())

  console.log(socket.getMessage())

  socket.socket.on("chat_message",(message)=>{
    console.log(message)
    setMessages([...messages,message])
  })  

  return (
    <div id="container">
      <SidebarComponent user={user} authenticated={user.token ? true : false} />
      <MessageBoxComponent openModal={() => setShowSidebar(true)} sendMessage={sendMessage} messages={messages} />
      <Drawer
        anchor={"left"}
        open={showSidebar}
        onClose={() => setShowSidebar(false)}
      >
        <SidebarComponent modal user={user} authenticated={user.token ? true : false} />
      </Drawer>
    </div>
  );
};

export default HomeScreen;
