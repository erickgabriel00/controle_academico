'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
   queryInterface.createTable('Aluno', {
      matricula: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_vinculo: {
        allowNull: false,
        type: Sequelize.DATE
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING
      },
      complemento: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING
      },
      rua: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      nome: {
        type: Sequelize.STRING
      },
      id_turma: {
        type: Sequelize.INTEGER
      }
    });
    
    queryInterface.addConstraint('Aluno', ['id_turma'], {
      type: 'foreign key',
      name: 'fkey_turma',
      references: { //Required field
        table: 'Turma',
        field: 'id'
      },
    });
    return
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Aluno');
  }
};