import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";

const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
const app = express();
app.use(express.static("../client"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome..." });
});

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running in: http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
