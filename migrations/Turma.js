'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
   queryInterface.createTable('Turma', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ano: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      semestre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_curso: {
        type: Sequelize.INTEGER
      }
    });
    
    queryInterface.addConstraint('Turma', ['id_curso'], {
      type: 'foreign key',
      name: 'fkey_curso',
      references: { //Required field
        table: 'Curso',
        field: 'id'
      },
    });
    return
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Turma');
  }
};