import express from "express";
const app = express();
const PORT = 5000;

app.use([messageOne, messageTwo, messageThree]);

// middleware => function
// req <=> middleware <=> res
// Syntax
/*
(req, middlewareFn, res) => {
    next()
}

*/
// http methods
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to middleware" });
});

const demoFun = (req, res, next) => {
  //   console.log("Middleware Demo Function");
  const { username } = req.query;
  if (username === "john") {
    req.city = "Chennai";
    next();
  } else {
    return res.status(400).json({ message: "Unauthorized user" });
  }
};
// middleware
app.get("/api/middleware", demoFun, (req, res) => {
  const { username } = req.query;
  const { city } = req;
  res.status(200).json({ message: `Welcome, ${username}, ${city}` });
});

// multiple middlewares
function messageOne(req, res, next) {
  console.log("Message - 1");
  next();
}

function messageTwo(req, res, next) {
  console.log("Message - 2");
  next();
}

function messageThree(req, res, next) {
  console.log("Message - 3");
  next();
}

app.get("/api/multiple-middleware", (req, res) => {
  res.status(200).json({ message: "Multiple middleware" });
});

app.listen(PORT, () =>
  console.log(`Server is running in: http://localhost:${PORT}`)
);
