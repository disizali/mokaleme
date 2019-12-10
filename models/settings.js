'use strict';
module.exports = (sequelize, DataTypes) => {
  const Settings = sequelize.define('Settings', {
    name: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  Settings.associate = function(models) {
    // associations can be defined here
  };
  return Settings;
};