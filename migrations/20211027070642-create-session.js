"use strict";
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable("sessions", {
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
    date: {
      type: Sequelize.DATE,
    },
    decision: {
      type: Sequelize.TEXT,
    },
    outcomes: {
      type: Sequelize.TEXT,
    },
    court: {
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
  return queryInterface.dropTable("sessions");
}
