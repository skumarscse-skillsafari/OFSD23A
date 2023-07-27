const http = require("http");
const PORT = 5000;
let server = http.createServer((req, res) => {
  //   console.log(req);
  if (req.url === "/") {
    res.end("<h1>Welcome to Node.js</h1>");
  } else if (req.url === "/about") {
    res.end({ message: "This is about page" });
  } else {
    res.end(`
        <h1>Something went wrong</h1>
        <a href="/">Back to home page</a>
    `);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running in: http://localhost:${PORT}`);
});
