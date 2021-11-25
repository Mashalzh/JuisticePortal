const pkg = require("sequelize");
const { Model } = pkg;

module.exports = (sequelize, DataTypes) => {
  class document extends Model {
    /**
     * Helper Method for defining associations.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      //Document belongs to a case
      document.belongsto(models.case1, {
        foreignKey: "id",
        as: "case_id",
      });
    }
  }
  document.init(
    {
      name: DataTypes.STRING,
      size: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "document",
      modelName: "document",
    }
  );
  return document;
};
