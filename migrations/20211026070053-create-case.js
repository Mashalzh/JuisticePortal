module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("case1", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
      },
      charges: {
        type: Sequelize.STRING,
      },
      startdate: {
        type: Sequelize.DATE,
      },
      topic: {
        type: Sequelize.STRING,
      },
      facts: {
        type: Sequelize.STRING,
      },
      rule: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        References: {
          modelName: "client",
          key: "id",
        },
      },
      appointment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        References: {
          modelName: "appointments",
          key: "id",
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        References: {
          modelName: "user",
          key: "id",
        },
      },
      sessions: {
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
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("case1");
  },
};
