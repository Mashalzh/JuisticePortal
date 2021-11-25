const pkg = require("sequelize");
const { Model } = pkg;

module.exports = (sequelize, DataTypes) => {
  class case1 extends Model {
    /**
     * Helper Method for defining associations.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // Case belongs to one client

      case1.belongsto(models.client, {
        foreignKey: "id",
        as: "client_id",
      });

      //case belongs to appointments
      case1.belongsto(models.appointments, {
        foreignKey: "id",
        as: "appointment_id",
      });

      //case has many documents
      case1.hasmany(models.document, {
        foreignKey: "id",
        as: "case_id",
      });

      //case belongs to a user
      case1.belongsto(models.user, {
        foreignKey: "id",
        as: "user_id",
      });

      //case has many contacts
      case1.hasmany(models.contacts, {
        foreignKey: "id",
        as: "case_id",
      });

      //case has many courts
      case1.hasmany(models.court, {
        foreignKey: "id",
        as: "case_id",
      });
      //case has many procedure
      case1.hasmany(models.procedure, {
        foreignKey: "id",
        as: "case_id",
      });
      //case has many sessions
      case1.hasmany(models.session, {
        foreignKey: "id",
        as: "case_id",
      });
    }
  }
  case1.init(
    {
      status: DataTypes.STRING,
      charges: DataTypes.STRING,
      startdate: DataTypes.DATE,
      topic: DataTypes.STRING,
      facts: DataTypes.STRING,
      rule: DataTypes.STRING,
      type: DataTypes.STRING,
      sessions: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "case1",
      modelName: "case1",
    }
  );

  return case1;
};
