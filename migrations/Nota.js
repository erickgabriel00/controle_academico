'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Nota', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      nota: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tipo: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_disciplina: {
        type: Sequelize.INTEGER
      }
    });
    queryInterface.addConstraint('Nota', ['id_disciplina'], {
        type: 'foreign key',
        name: 'fkey_disciplina',
        references: { //Required field
          table: 'Disciplina',
          field: 'id'
        },
      });
      return
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Nota');
  }
};