const { createServer } = require("http");

const server = createServer((req, res) => {
  if (req.url === "/") {
    // http://localhost:5000
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to home page</h1>");
    res.end();
  } else if (req.url === "/about") {
    // http://localhost:5000/about
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to about page</h1>");
    res.end();
  } else {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.write(`
    <h1>Something went wrong</h1>
    <a href="/">Click here to go home page</a>
`);
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});

server.on("error", (err) => {
  console.log(err);
});
