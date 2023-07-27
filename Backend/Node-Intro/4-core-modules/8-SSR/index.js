const http = require("http");
const { readFileSync } = require("fs");
const PORT = 5000;

const htmlFile = readFileSync("./Course-Website/index.html", "utf-8");
const cssFile = readFileSync("./Course-Website/css/style.css", "utf-8");
const jsFile = readFileSync("./Course-Website/js/index.js", "utf-8");
const headerShape = readFileSync("./Course-Website/images/header-shape.svg");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(htmlFile);
    res.end();
  } else if (req.url === "/css/style.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(cssFile);
    res.end();
  } else if (req.url === "/js/index.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(jsFile);
    res.end();
  } else if (req.url === "/images/header-shape.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(headerShape);
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

server.listen(PORT, () => {
  console.log(`Server is running in: http://localhost:${PORT}`);
});
