import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
    res.send("radha radha");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
});
