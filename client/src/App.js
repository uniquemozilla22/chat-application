import "./App.css";
import Layout from "./Layout";
import HomeScreen from "./Screens/Home.screen";
// import { io } from "socket.io-client";

function App() {
  // const socket = io("http://localhost:8000");

  return (
    <Layout>
      <HomeScreen />
    </Layout>
  );
}

export default App;
