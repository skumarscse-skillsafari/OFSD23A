// const express = require("express");
import express from "express";
import path from "path";
const app = express();

// SSR using static()
app.use(express.static("./Course-Website"));
// Req methods
// get(), post(), put(), patch(), delete(), all()

// GET Request
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome, Express!!!</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>This is About Page...</h1>");
// });

app.all("*", (req, res) => {
  res.status(404).send(`
      <h1>Page not found</h1>
      <a href="/">Back to home page</a>
  `);
});
// SSR using path.resolve()
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./Course-Website/index.html"));
// });

app.listen(5000, () => {
  console.log(`Server is running in: http://localhost:5000`);
});
