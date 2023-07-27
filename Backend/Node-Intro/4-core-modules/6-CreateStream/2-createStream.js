const { createReadStream } = require("fs");

const stream = createReadStream(
  "./large-file.txt",
  { encoding: "utf-8" },
  { highWaterMark: 80000 }
);

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
