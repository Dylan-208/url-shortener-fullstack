import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/routes";

dotenv.config();

const server = express();

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(router);
server.listen(process.env.PORT);
