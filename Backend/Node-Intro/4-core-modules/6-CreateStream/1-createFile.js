const { writeFileSync } = require("fs");

for (let i = 0; i <= 10000; i++) {
  writeFileSync("./large-file.txt", `This is line no. ${i + 1}\n`, {
    flag: "a",
  });
}
