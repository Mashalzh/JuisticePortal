/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
"use strict";
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable("appointments", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    subject: {
      type: Sequelize.STRING,
    },
    startdate: {
      type: Sequelize.DATE,
    },
    enddate: {
      type: Sequelize.DATE,
    },
    starttime: {
      type: Sequelize.TIME,
    },
    endtime: {
      type: Sequelize.TIME,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
}
export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable("appointments");
}
