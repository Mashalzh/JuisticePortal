/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
"use strict";
export default (sequelize, DataTypes) => {
  const case1 = sequelize.define(
    "case1",
    {
      status: DataTypes.STRING,
      charges: DataTypes.STRING,
      startdate: DataTypes.DATE,
      topic: DataTypes.STRING,
      facts: DataTypes.STRING,
      rule: DataTypes.STRING,
      type: DataTypes.STRING,
      sessions: DataTypes.STRING,
    },
    {}
  );
  case1.associate = function (models) {
    // Case belongs to one client
    case1.belongsto(models.client);
    //case belongs to appointments
    case1.belongsto(models.appointments);
    //case has many documents
    case1.hasmany(models.document);
    //case belongs to a user
    case1.belongsto(models.user);
    //case has many contacts
    case1.hasmany(models.contacts);
    //case has many courts
    case1.hasmany(models.court);
    //case has many procedure
    case1.hasmany(models.procedure);
    //case has many sessions
    case1.hasmany(models.session);
  };
  return case1;
};
