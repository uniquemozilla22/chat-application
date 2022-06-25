import authenticateRouter from "./Authenticate/authenticate.route.js";

const routes = (app) => {
  app.use("/authenticate", authenticateRouter);
};

export default routes;
