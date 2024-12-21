const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("world", "Rohan");

console.log("The content of the file is",text)
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("rohan.txt", text);
