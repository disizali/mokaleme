"use strict";
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "Course",
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      cover: DataTypes.TEXT
    },
    {}
  );
  Course.associate = function(models) {
    Course.belongsTo(models.Teacher);
  };
  return Course;
};
