const express = require("express");
const bodyParser = require("body-parser");
const { Op } = require("sequelize");
const db = require("./database/models");
const config = require("./database/config/config");
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
  res.send("pong (express 1)");
});

app.get("/api/playlists", async (req, res) => {
  const { nameLike } = req.query;

  let searchQuery = {};

  if (nameLike) {
    searchQuery = {
      name: { [Op.like]: `%${nameLike}%` },
    };
  }

  let playlists = null;

  try {
    playlists = await db.Playlist.findAll({
      where: {
        ...searchQuery,
      },
      include: [db.Song],
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

  res.json(playlists);
});

app.get("/api/playlists/:id", async (req, res) => {
  let playlist = null;

  try {
    playlist = await db.Playlist.findByPk(req.params.id, {
      include: [db.Song],
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

  res.json(playlist);
});

app.use("*", (req, res) => {
  res.send("Not Found (express 1)");
});

app.listen(port, () => {
  console.log(`Express app 1 listening on port ${port}`);
});
