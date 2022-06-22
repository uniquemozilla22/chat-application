import "./App.css";
import MessageBoxComponent from "./Components/Message.comp";
import SidebarComponent from "./Components/Sidebar.comp";
import { Drawer, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const socket = io("http://localhost:8000");

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
}

export default App;
