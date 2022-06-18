import "./App.css";
import MessageBoxComponent from "./Components/Message.comp";
import SidebarComponent from "./Components/Sidebar.comp";
import { Drawer, Modal } from "@mui/material";
import { useState } from "react";

function App() {
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
}

export default App;
