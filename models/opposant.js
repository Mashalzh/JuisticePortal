import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class opposant extends Model {
    /**
     * Helper Method for defining associations.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      //Opposant belongs to a client
      opposant.belongsto(models.client, {
        foreignKey: "id",
        as: "client_id",
      });
    }
  }
  opposant.init(
    {
      fname: DataTypes.STRING,
      lname: DataTypes.STRING,
      address: DataTypes.STRING,
      CNIC: DataTypes.INTEGER,
      phone: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "opposant",
      modelName: "opposant",
    }
  );

  return opposant;
};
