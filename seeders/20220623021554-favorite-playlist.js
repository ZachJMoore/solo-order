"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Playlists",
      [
        {
          name: "My Favorites",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Top 10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Playlists", null, {});
  },
};
