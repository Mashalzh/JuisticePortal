/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
"use strict";
export default (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
  user.associate = function (models) {
    //User belongs to a case
    user.belongsto(models.case1);
  };
  return user;
};
