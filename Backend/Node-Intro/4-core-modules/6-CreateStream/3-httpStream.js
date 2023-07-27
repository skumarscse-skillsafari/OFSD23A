const { createReadStream, readFileSync } = require("fs");
const http = require("http");

// const server = http.createServer((req, res) => {
//   const stream = createReadStream(
//     "./large-file.txt",
//     { encoding: "utf-8" },
//     { highWaterMark: 80000 }
//   );
//   stream.on("open", () => {
//     stream.pipe(res);
//   });
// });

const server = http.createServer((req, res) => {
  let readContent = readFileSync("./large-file.txt", "utf-8");
  res.end(readContent);
});

server.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
