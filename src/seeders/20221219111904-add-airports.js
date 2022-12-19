"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Airports", [
      {
        name: "Wilkes-Barre/Scranton International Airport",
        cityId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Indira Gandhi International Airport",
        cityId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kempegowda International Airport",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Václav Havel Airport",
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "San Francisco International Airport",
        cityId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "LaGuardia Airport",
        cityId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "John F Kennedy International Airport",
        cityId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
