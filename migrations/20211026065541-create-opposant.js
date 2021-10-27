/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
"use strict";
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable("opposants", {
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
        modelName: "client",
        key: "id",
      },
    },
    fname: {
      type: Sequelize.STRING,
    },
    lname: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    CNIC: {
      type: Sequelize.INTEGER,
    },
    phone: {
      type: Sequelize.INTEGER,
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
  return queryInterface.dropTable("opposants");
}
