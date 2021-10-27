/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
"use strict";
export default (sequelize, DataTypes) => {
  const opposant = sequelize.define(
    "opposant",
    {
      fname: DataTypes.STRING,
      lname: DataTypes.STRING,
      address: DataTypes.STRING,
      CNIC: DataTypes.INTEGER,
      phone: DataTypes.INTEGER,
    },
    {}
  );
  opposant.associate = function (models) {
    //Opposant belongs to a client
    opposant.belongsto(models.client);
  };
  return opposant;
};
