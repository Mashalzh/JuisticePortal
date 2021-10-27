/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
"use strict";
export default (sequelize, DataTypes) => {
  const document = sequelize.define(
    "document",
    {
      name: DataTypes.STRING,
      size: DataTypes.STRING,
    },
    {}
  );
  document.associate = function (models) {
    //Document belongs to a case
    document.belongsto(models.case1);
  };
  return document;
};
