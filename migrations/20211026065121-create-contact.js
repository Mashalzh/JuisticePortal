/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
"use strict";
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable("contacts", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    fname: {
      type: Sequelize.STRING,
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
    lname: {
      type: Sequelize.STRING,
    },
    fixnm: {
      type: Sequelize.INTEGER,
    },
    partnb: {
      type: Sequelize.INTEGER,
    },
    type: {
      type: Sequelize.STRING,
    },
    fax: {
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
  return queryInterface.dropTable("contacts");
}
