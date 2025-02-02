import express from "express"
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/message.routes.js"
import dbConnect from "./db/dbConnect.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js"
const PORT = process.env.PORT || 5000;
import {app ,server} from "./socket/socket.js"
dotenv.config();

app.use(express.json()) //to parse the incoming  requets with Json payloads (from req.body)
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes)

server.listen(PORT, () => {
    dbConnect();
    console.log(`server started on http://localhost:${PORT}`);
});
