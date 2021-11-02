import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class procedure extends Model {
    /**
     * Helper Method for defining associations.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // procedure belongs to a case
      procedure.belongsto(models.case1, {
        foreignKey: "id",
        as: "case_id",
      });
    }
  }

  procedure.init(
    {
      desc: DataTypes.STRING,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: "procedure",
      modelName: "procedure",
    }
  );

  return procedure;
};
