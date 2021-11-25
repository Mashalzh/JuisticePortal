const pkg = require("sequelize");
const { Model } = pkg;

module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    /**
     * Helper Method for defining associations.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      //contact belongs to a case
      contact.belongsto(models.case1, {
        foreignKey: "id",
        as: "case_id",
      });
    }
  }
  contact.init(
    {
      fname: DataTypes.STRING,
      lname: DataTypes.STRING,
      fixnm: DataTypes.INTEGER,
      partnb: DataTypes.INTEGER,
      type: DataTypes.STRING,
      fax: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "contact",
      modelName: "contact",
    }
  );
  return contact;
};
