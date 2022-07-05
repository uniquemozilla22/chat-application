import { Server } from "socket.io";

const SocketServices = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  let messages = []

  io.on("connection", (socket) => {
    socket.on("chat_message",(msg)=>{
      console.log(msg,"mesage Added")
      io.emit("chat_message",msg)
    })
    });
};

export default SocketServices;
