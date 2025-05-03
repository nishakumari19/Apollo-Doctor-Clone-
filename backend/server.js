import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import doctorRoutes from "./routes/doctor.js";

dotenv.config();
const app = express();
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true
  }));
  
app.use(express.json());

app.use("/api", doctorRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => console.error("MongoDB Error:", err));