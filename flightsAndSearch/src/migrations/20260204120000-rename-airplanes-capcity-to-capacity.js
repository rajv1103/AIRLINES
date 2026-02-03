"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("Airplanes", "capcity", "capacity");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("Airplanes", "capacity", "capcity");
  },
};
