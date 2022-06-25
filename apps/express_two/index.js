const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/echo", (req, res) => {
  res.send(req.query);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
