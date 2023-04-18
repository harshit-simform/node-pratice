// const fs = require("fs");
// const server = require("http").createServer();

// server.on("request", (req, res) => {
//   //   fs.readFile("sshkey-generation.txt", (err, data) => {
//   //     if (err) console.error(err);
//   //     res.end(data);
//   //   });

//   //   const readable = fs.createReadStream("sshkey-generation.txt");
//   //   readable.on("data", (data) => {
//   //     res.write(data);
//   //   }); // solution using stream instead of fs
//   const readable = fs.createReadStream("sshkey-generation.txt");
//   readable.on("end", () => {
//     res.end("finished");
//   });
//   readable.on("error", (err) => {
//     res.end("File not found");
//     console.error(err);
//   });
//   readable.pipe(
//     res
//   ); /* solution using pipe instead of data becuase some time the speed of incoming data and outgoiing is not same so for that sitauation use pipe */
// });

// server.listen(8000, "localhost", () => {
//   console.log("listening on http://localhost:8000");
// });
console.log(arguments);
