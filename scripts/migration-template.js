'use strict';

/*
 * Description of this migration.
 *
 * IMPORTANT: Please ensure any schema changes (column additions, removals, new tables, etc.)
 * are serial rather than parallel. Specifically, multiple changes to one resource using
 * `Promise.all()`, or not `await`ing promises, is dangerous for schema migrations
 * because it could cause a database deadlock.
 *
 */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async transaction => {
      // up script here
      // await queryInterface.addColumn(
      //   'User',
      //   'metadata',
      //   {
      //     allowNull: true,
      //     type: Sequelize.JSON
      //   },
      //   { transaction }
      // )
    });
  },
  down: queryInterface => {
    return queryInterface.sequelize.transaction(async transaction => {
      // Down script here
      // await queryInterface.removeColumn('User', 'metadata', { transaction })
    });
  }
};
