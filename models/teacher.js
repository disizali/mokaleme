"use strict";
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define(
    "Teacher",
    {
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      image: DataTypes.TEXT 
    },
    {}
  );
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};