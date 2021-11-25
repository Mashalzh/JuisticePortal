const pkg = require("sequelize");
const { Model } = pkg;
module.exports = (sequelize, DataTypes) => {
  class session extends Model {
    /**
     * Helper Method for defining associations.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      //sessions belongs to a case
      session.belongsto(models.case1, {
        foreignKey: "id",
        as: "case_id",
      });
    }
  }
  session.init(
    {
      date: DataTypes.DATE,
      decision: DataTypes.TEXT,
      outcomes: DataTypes.TEXT,
      court: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "session",
      modelName: "session",
    }
  );

  return session;
};
