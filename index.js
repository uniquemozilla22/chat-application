import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join("client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/", (req, res) =>
  res.json({ success: true, message: "The server is running" })
);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log("server running" + port));
