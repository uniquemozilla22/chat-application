import express from "express";
import cors from "cors";
import buildClient from "./services/buildClient.js";
import SocketServices from "./services/socket.js";
import http from "http";
import { Socket } from "socket.io";

const app = express();
const server = http.createServer(app);
app.use(cors());

// All the Socket Server Socket Features are over here
SocketServices(server);

server.listen(8000, () => console.log("Server is running"));
