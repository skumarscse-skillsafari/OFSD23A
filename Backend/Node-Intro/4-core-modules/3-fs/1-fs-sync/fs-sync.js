const { readFileSync, writeFileSync } = require("fs");

let fileOne = readFileSync("./first.txt", "utf-8");
console.log(fileOne);
console.log("-----------------");
let fileTwo = readFileSync("./second.txt", "utf-8");
console.log(fileTwo);

writeFileSync("./writeFile.txt", `The result: ${fileOne}, ${fileTwo}\n`, {
  flag: "a",
});
