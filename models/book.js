"use strict";
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      name: DataTypes.STRING,
      image: DataTypes.TEXT,
      courseId: DataTypes.INTEGER,
      description: DataTypes.TEXT
    },
    {}
  );
  Book.associate = function(models) {
    Book.belongsTo(models.Course, {
      foreignKey: "courseId"
    });
    Book.hasMany(models.Content, {
      foreignKey: "bookId"
    });
  };
  return Book;
};
