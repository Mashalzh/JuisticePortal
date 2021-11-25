module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("contacts", {
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
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("contacts");
  },
};
