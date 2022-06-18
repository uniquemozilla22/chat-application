import "./App.css";
import MessageBoxComponent from "./Components/Message.comp";
import SidebarComponent from "./Components/Sidebar.comp";

function App() {
  return (
    <div id="container">
      <SidebarComponent />
      <MessageBoxComponent />
    </div>
  );
}

export default App;
