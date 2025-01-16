import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import dbConnect from "./db/dbConnect.js";
const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();

app.use(express.json())

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//     res.send("radha radha");
// });



app.listen(PORT, () => {
    dbConnect();
    console.log(`server started on http://localhost:${PORT}`);
});
