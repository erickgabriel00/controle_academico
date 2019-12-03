'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
   queryInterface.createTable('Disciplina', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      area: {
        allowNull: false,
        type: Sequelize.STRING
      },
      periodo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      professor_matricula: Sequelize.INTEGER,
      aluno_matricula: Sequelize.INTEGER,
      id_curso: Sequelize.INTEGER
    });
    
    queryInterface.addConstraint('Disciplina', ['professor_matricula'], {
      type: 'foreign key',
      name: 'fkey_professor',
      references: { //Required field
        table: 'Professor',
        field: 'matricula'
      },
    });
    queryInterface.addConstraint('Disciplina', ['aluno_matricula'], {
      type: 'foreign key',
      name: 'fkey_aluno',
      references: { //Required field
        table: 'Aluno',
        field: 'matricula'
      },
    });
    queryInterface.addConstraint('Disciplina', ['id_curso'], {
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
    return queryInterface.dropTable('Disciplina');
  }
};