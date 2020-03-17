"use strict";
module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define(
    "Content",
    {
      title: DataTypes.TEXT,
      body: DataTypes.TEXT,
      bookId: DataTypes.INTEGER
    },
    {}
  );
  Content.associate = function(models) {
    Content.belongsTo(models.Book, {
      foreignKey: "bookId",
      sourceId: "bookId"
    });
  };
  return Content;
};
