// const EventEmitter = require("events");
// const MyEmitter = new EventEmitter();

// MyEmitter.on("demo", () => console.log("1st demo"));
// MyEmitter.on("demo", () => console.log("2nd demo"));
// MyEmitter.emit("demo");

//// htttp example
const http = require("http");
const server = http.createServer();

// server.on("request", (req, res) => {
//   console.log("request received");
//   //   res.end("Hello there");
// });
server.on("start", (req, res) => {
  console.log("another request received");
  res.end("wallaa");
});

server.listen(8000, "localhost", () => {
  console.log("listening on http://localhost:8000");
});
