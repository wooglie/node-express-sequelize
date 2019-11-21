'use strict';

const sid = require('shortid');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      uid: {
        allowNull: false,
        primaryKey: true,
        default: sid.generate(),
        type: Sequelize.STRING,
        unique: true,
      },

      email: {
        allowNull: false,
        type: Sequelize.STRING
      },

      password: {
        allowNull: false,
        type: Sequelize.STRING
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('Users');
  }
};
