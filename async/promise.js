const fs = require("fs");
const superagent = require("superagent");
const server = require("http").createServer();

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("file not found");
      resolve(data);
    });
  });
};

const writeFilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject(err);
      resolve("success");
    });
  });
};

const getdogPics = async () => {
  try {
    const data = await readFilePromise(`${__dirname}/dog.txt`);
    console.log(data, "data");
    const picLink = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(picLink, "piclink");
    const result = await writeFilePromise(
      `${__dirname}/dog1.txt`,
      picLink.body.message
    );
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

server.on("request", (req, res) => {
  // by using promise
  //   readFilePromise(`${__dirname}/dog.txt`)
  //     .then((data) => {
  //       return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  //     })
  //     .then((result) => {
  //       console.log(result.body.message);
  //       res.end(`<img src="${result.body.message}" alt="">`);
  //       return writeFilePromise(`${__dirname}/dog1.txt`, res.body.message);
  //     })
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // by using async and await instead of using Promise
  (async () => {
    try {
      const result = await getdogPics();
      console.log("in try");
      res.end(`${result}`);
    } catch (err) {
      res.end(`${err}`);
    }
  })();
});

server.listen(8000, "localhost", () => {
  console.log("listening on http://localhost:8000");
});
