'use strict';

const sid = require('shortid');
const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      uid: {
        allowNull: false,
        primaryKey: true,
        defaultValue: sid.generate(),
        type: DataTypes.STRING,
        unique: true,
      },

      email: {
        allowNull: false,
        type: DataTypes.STRING
      },

      password: {
        allowNull: false,
        type: DataTypes.STRING
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },

      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },

      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('Users');
  }
};
