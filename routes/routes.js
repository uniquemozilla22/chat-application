const routes = (app) => {
  app.use("/", (req, res) =>
    res.json({ status: 200, message: "Server is connected" })
  );
};

export default routes;
