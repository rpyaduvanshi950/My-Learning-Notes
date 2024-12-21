// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

const fs = require("fs");
let text1 = fs.readFileSync("rohan.txt", "utf-8");
fs.readFile("dele.txt", "utf-8", (err,text1 )=>{
    console.log(text1);
});
console.log("This is a message");
