import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => res.send("<h1>Server Started</h1>"));

app.listen(process.env.PORT, () => console.log("server running"));
