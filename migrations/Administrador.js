'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Administrador', {
      matricula: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      senha: {
        type: Sequelize.STRING
      },
      numero: {
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
      data_vinculo: {
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Administrador');
  }
};