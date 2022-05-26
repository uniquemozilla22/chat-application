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

app.get("/", (req, res) => res.send("<h1>Server Started</h1>"));

app.listen(process.env.PORT, () => console.log("server running"));
