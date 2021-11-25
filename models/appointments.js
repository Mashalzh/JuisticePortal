const pkg = require("sequelize");
const { Model } = pkg;

module.exports = (sequelize, DataTypes) => {
  class appointments extends Model {
    /**
     * Helper Method for defining associations.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // appointments has many cases
      appointments.hasmany(models.case1, {
        foreignKey: "id",
        as: "casse_id",
      });
    }
  }
  appointments.init(
    {
      subject: DataTypes.STRING,
      startdate: DataTypes.DATE,
      enddate: DataTypes.DATE,
      starttime: DataTypes.TIME,
      endtime: DataTypes.TIME,
    },
    {
      sequelize,
      tableName: "appointments",
      modelName: "appointments",
    }
  );

  return appointments;
};
