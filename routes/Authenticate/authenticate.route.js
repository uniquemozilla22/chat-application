import Express from "express";
const authenticate = Express.Router();

authenticate.get("/", (req, res) =>
  res.send({ success: true, message: "Working Just Fine" })
);

authenticate.post("/login", (req, res) => {
  res.send({ ...req.body });
});

export default authenticate;
