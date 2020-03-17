"use strict";
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "Course",
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      cover: DataTypes.TEXT
    },
    {}
  );
  Course.associate = function(models) {
    Course.hasMany(models.Book, {
      foreignKey: "courseId"
    });
  };
  return Course;
};
