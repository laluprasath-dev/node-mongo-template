import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
import http from "http";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import newrelic from 'newrelic'
import cookieParser from "cookie-parser";
import connectDB from "./config/dbConfig";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));
connectDB();

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
