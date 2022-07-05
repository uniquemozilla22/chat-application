import authenticateRouter from "./Authenticate/authenticate.route.js";
import ChatroomRouter from "./Chatroom/Chatroom.route.js";
import UserRouter from "./Users/Users.routes.js";

const routes = (app) => {
  app.use("/authenticate", authenticateRouter);
  app.use("/chatroom",ChatroomRouter)
  app.use("/users", UserRouter)
};

export default routes;
