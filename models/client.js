/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
"use strict";
export default (sequelize, DataTypes) => {
  const client = sequelize.define(
    "client",
    {
      fname: DataTypes.STRING,
      lname: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      CNIC: DataTypes.INTEGER,
    },
    {}
  );
  client.associate = function (models) {
    // Client has many opposant
    client.hasMany(models.opposant);
    //client has many cases
    client.hasMany(models.case1);
  };
  return client;
};
