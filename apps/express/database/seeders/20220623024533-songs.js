"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let songs = [
      {
        name: "Never Gonna Give You Up",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "All Star",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sweet Caroline",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "I Want To Hold Your Hand",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await Promise.all([
      queryInterface.bulkInsert("Songs", songs, {}),
      queryInterface.bulkInsert(
        "PlaylistSongs",
        songs.map((song, index) => {
          return {
            playlist_id: index < 2 ? 1 : 2,
            song_id: index + 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          };
        })
      ),
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.bulkDelete("Songs", null, {}),
      queryInterface.bulkDelete("PlaylistSongs", null, {}),
    ]);
  },
};
