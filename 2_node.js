const fs = require("fs");
const text = fs.readFileSync("reading.txt","utf-8");

let ans = text.replace("file", "writing");

console.log("the content of the file is");
console.log(ans);

console.log("creating a new file....");
fs.writeFileSync("write.txt", text);
