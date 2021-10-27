/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
"use strict";
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable("courts", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    client_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      References: {
        modelName: "case1",
        key: "client_id",
      },
    },
    case_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      References: {
        modelName: "case1",
        key: "id",
      },
    },
    name: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
    roomnum: {
      type: Sequelize.INTEGER,
    },
    judgename: {
      type: Sequelize.STRING,
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
  return queryInterface.dropTable("courts");
}
