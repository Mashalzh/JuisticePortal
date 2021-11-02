import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class court extends Model {
    /**
     * Helper Method for defining associations.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      //Court belongs to a case
      court.belongsto(models.case1, {
        foreignKey: "id",
        as: "case_id",
      });
    }
  }
  court.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      roomnum: DataTypes.INTEGER,
      judgename: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "court",
      modelName: "court",
    }
  );
  return court;
};
