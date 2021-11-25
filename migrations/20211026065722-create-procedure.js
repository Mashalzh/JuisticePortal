module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("procedures", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      case_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        References: {
          modelName: "case1",
          key: "id",
        },
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        References: {
          modelName: "case1",
          key: "id",
        },
      },

      desc: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("procedures");
  },
};
