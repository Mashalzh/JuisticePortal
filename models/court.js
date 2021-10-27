/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
"use strict";
export default (sequelize, DataTypes) => {
  const court = sequelize.define(
    "court",
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      roomnum: DataTypes.INTEGER,
      judgename: DataTypes.STRING,
    },
    {}
  );
  court.associate = function (models) {
    //Court belongs to a case
    court.belongsto(models.case1);
  };
  return court;
};
