/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
"use strict";
export default (sequelize, DataTypes) => {
  const procedure = sequelize.define(
    "procedure",
    {
      desc: DataTypes.STRING,
      date: DataTypes.DATE,
    },
    {}
  );
  procedure.associate = function (models) {
    // procedure belongs to a case
    procedure.belongsto(models.case1);
  };
  return procedure;
};
