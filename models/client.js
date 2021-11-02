import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class client extends Model {
    /**
     * Helper Method for defining associations.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // Client has many opposant
      client.hasMany(models.opposant, {
        foreignKey: "id",
        as: "client_id",
      });
      //client has many cases
      client.hasMany(models.case1, {
        foreignKey: "id",
        as: "client_id",
      });
    }
  }
  client.init(
    {
      fname: DataTypes.STRING,
      lname: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      CNIC: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "client",
      modelName: "client",
    }
  );
};
