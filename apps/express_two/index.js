const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

if (process.env.NODE_ENV === "development") {
  app.use("*", (req, res, next) => {
    console.log({
      requestedUrl: req.originalUrl,
    });
    next();
  });
}

app.get("/ping", (req, res) => {
  res.send("pong (express 2)");
});

app.get("/echo", (req, res) => {
  res.send(req.query);
});

app.use("*", (req, res) => {
  res.send("Not Found (express 2)");
});

app.listen(port, () => {
  console.log(`Express app 2 listening on port ${port}`);
});
