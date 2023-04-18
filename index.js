const fs = require("fs");
setTimeout(() => console.log("timer 1 is finished"), 0);
setImmediate(() => console.log("timer 2 is finished"));

fs.readFile("sshkey-generation.pdf", () => {
  console.log("readFile is done");
});

console.log("top level code done");
