'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Logic for transforming into the new state
    return queryInterface.addColumn(
      'Contacts',
      'email',
      Sequelize.STRING
    );
  },

  down: (queryInterface, Sequelize) => {
    // Logic for reverting the changes
    return queryInterface.removeColumn(
      'Contacts',
      'email'
    );
  }
};
