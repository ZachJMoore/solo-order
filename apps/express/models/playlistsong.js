"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PlaylistSong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // many to many
      models.Playlist.belongsToMany(models.Song, {
        through: models.PlaylistSong,
        foreignKey: "playlist_id",
        otherKey: "song_id",
      });
      models.Song.belongsToMany(models.Playlist, {
        through: models.PlaylistSong,
        foreignKey: "song_id",
        otherKey: "playlist_id",
      });
      models.Playlist.hasMany(models.PlaylistSong, {
        foreignKey: "playlist_id",
      });
      models.PlaylistSong.belongsTo(models.Playlist, {
        foreignKey: "playlist_id",
      });

      models.Song.hasMany(models.PlaylistSong, { foreignKey: "song_id" });
      models.PlaylistSong.belongsTo(models.Song, { foreignKey: "song_id" });
    }
  }
  PlaylistSong.init(
    {
      playlist_id: DataTypes.INTEGER,
      song_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PlaylistSong",
    }
  );
  return PlaylistSong;
};
