import express from "express";
import cors from "cors";
import buildClient from "./services/buildClient.js";
import SocketServices from "./services/socket.js";
import http from "http";
import { Socket } from "socket.io";
import ConnectionDatabase from "./Database/Connection.database.js";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import env from "dotenv";

env.config();
const app = express();
const server = http.createServer(app);
app.use(cors());

ConnectionDatabase(mongoose);

routes(app);
// All the Socket Server Socket Features are over here
SocketServices(server);

const port = process.env.NODE_ENV !== "DEVELOPMENT" ? process.env.PORT : 8000;

server.listen(port, () => console.log("Server is running", port));
