import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import  messageRoutes from "./routes/messageRoutes.js";
import ConnectDB  from "./config/db.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

ConnectDB();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(
  {
    origin: process.env.CORS_ORIGIN,
    credentials: true
  }
));

// Routes
app.use("/api/auth", authRoutes);
app.use('/api/messages', messageRoutes);


const PORT = process.env.PORT;

server.listen(PORT || 3039, () => console.log(`Server running on port ${PORT}`));
