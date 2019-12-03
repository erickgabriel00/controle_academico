'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Aluno', {
      matricula: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_vinculo: {
        type: Sequelize.DATE
      },
      senha: {
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
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Aluno');
  }
};