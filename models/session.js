/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
"use strict";
export default (sequelize, DataTypes) => {
  const session = sequelize.define(
    "session",
    {
      date: DataTypes.DATE,
      decision: DataTypes.TEXT,
      outcomes: DataTypes.TEXT,
      court: DataTypes.STRING,
    },
    {}
  );
  session.associate = function (models) {
    //sessions belongs to a case
    session.belongsto(models.case1);
  };
  return session;
};
