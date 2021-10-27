/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
"use strict";
export default (sequelize, DataTypes) => {
  const appointments = sequelize.define(
    "appointments",
    {
      subject: DataTypes.STRING,
      startdate: DataTypes.DATE,
      enddate: DataTypes.DATE,
      starttime: DataTypes.TIME,
      endtime: DataTypes.TIME,
    },
    {}
  );
  appointments.associate = function (models) {
    // appointments has many cases
    appointments.hasmany(models.case1);
  };
  return appointments;
};
