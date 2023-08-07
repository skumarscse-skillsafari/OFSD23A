import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
const app = express();
const PORT = 5000;

app.use(express.static("./client"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);

// listen
app.listen(PORT, () =>
  console.log(`Server is running in: http://localhost:${PORT}`)
);
