module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("documents", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      size: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
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
          key: "client_id",
        },
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("documents");
  },
};
