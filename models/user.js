const pkg = require("sequelize");
const { Model } = pkg;
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper Method for defining associations.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      User.belongsto(models.case1, {
        foreignKey: "id",
        as: "case_id",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "user",
      modelName: "user",
    }
  );

  return User;
};
