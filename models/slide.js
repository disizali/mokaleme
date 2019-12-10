"use strict";
module.exports = (sequelize, DataTypes) => {
  const Slide = sequelize.define(
    "Slide",
    {
      title: DataTypes.TEXT,
      body: DataTypes.TEXT,
      url: DataTypes.TEXT,
      image: DataTypes.TEXT
    },
    {}
  );
  Slide.associate = function(models) {
    // associations can be defined here
  };
  return Slide;
};
