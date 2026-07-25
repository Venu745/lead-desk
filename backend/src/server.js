import express from "express";
import noteRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();


// Middleware

app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5174",
    "https://lead-desk-6.onrender.com"
  ],
  credentials: true
}));


// API routes

app.use("/api/notes", noteRoutes);
app.use("/api/auth", authRoutes);


// Serve frontend in production

if (process.env.NODE_ENV === "production") {

  app.use(express.static(
    path.join(__dirname, "../frontend/dist")
  ));

  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../frontend/dist/index.html")
    );
  });

}


connectDB().then(() => {

  app.listen(PORT, () => {
    console.log("Server running on port", PORT);
  });

});
