var path = require("path");

// console.log(path);
// console.log(path.sep);

let newPath = path.join("/main-folder", "/sub-folder", "/file-name.txt");
// console.log(newPath);

// console.log(__filename);

console.log(path.resolve(newPath));

console.log(path.join(__dirname, newPath));
