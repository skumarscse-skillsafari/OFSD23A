const { readFile, writeFile } = require("fs");

console.log("Start");
readFile("./first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  //   console.log(data);
  let fileOne = data;
  readFile("./second.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    // console.log(data);
    let fileTwo = data;
    writeFile(
      "./writeFileAsync.txt",
      `The result: ${fileOne}, ${fileTwo}\n`,
      { flag: "a" },
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("File written successfully");
      }
    );
  });
});

console.log("End");
