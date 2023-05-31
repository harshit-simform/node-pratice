const express = require("express");
const app = express();

const receipe = require("./receipe.json");

app.listen(8080, (req, res) => {
  console.log("server started");
});

app.get("/", (req, res) => {
  console.log(req.query);
  let data = [];
  const page = req.query.page || 1;
  const limit = req.query.limit || 3;
  if (!req.query.page && !req.query.limit) {
    data = receipe;
  } else {
    console.log((page - 1) * limit, (page - 1) * limit + limit * 1);
    data = receipe.slice((page - 1) * limit, (page - 1) * limit + limit * 1);
    console.log(data);
  }
  res.status(200).json(data);
});
