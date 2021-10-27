/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
"use strict";
export default (sequelize, DataTypes) => {
  const contact = sequelize.define(
    "contact",
    {
      fname: DataTypes.STRING,
      lname: DataTypes.STRING,
      fixnm: DataTypes.INTEGER,
      partnb: DataTypes.INTEGER,
      type: DataTypes.STRING,
      fax: DataTypes.STRING,
    },
    {}
  );
  contact.associate = function (models) {
    //contact belongs to a case
    contact.belongsto(models.case1);
  };
  return contact;
};
