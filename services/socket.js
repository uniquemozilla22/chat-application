import { Server } from "socket.io";

const SocketServices = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log(socket.id, "<=Connected Sucessfully");
  });
};

export default SocketServices;
