import fs from "fs";

const data: string="Hello, Node.js";
fs.writeFileSync('example.txt', data);
console.log("file is written successfully!");
