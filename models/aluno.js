  
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Aluno = sequelize.define('Aluno', {
    matricula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    data_vinculo: DataTypes.DATE,
    senha: DataTypes.STRING,
    complemento: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    rua: DataTypes.STRING,
    cep: DataTypes.STRING,
    estado: DataTypes.STRING,
    id_turma: DataTypes.INTEGER,
    nome: DataTypes.STRING,
  }, {
    timestamps: false
  });
  Aluno.associate = function(models) {
    // associations can be defined here
  };
  return Aluno;
};