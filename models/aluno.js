  
'use strict';
const Turma = require('./turma');
module.exports = (sequelize, DataTypes) => {
  var Aluno = sequelize.define('Aluno', {
    matricula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    data_vinculo: {
      allowNull: false,
      type: DataTypes.DATE
    },
    senha: {
      allowNull: false,
      type: DataTypes.STRING
    },
    complemento: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    rua: DataTypes.STRING,
    cep: DataTypes.STRING,
    estado: DataTypes.STRING,
    nome: DataTypes.STRING,
    id_turma: {
      type: DataTypes.INTEGER,
      references:{
        model: Turma,
        key: 'id'
      }
    }
  }, {
    timestamps: false,
    tableName: 'alunos'
  });
  
  Aluno.associate = (models) =>{
    Aluno.hasOne(models.Turma, {foreignKey: 'id', as: 'turma', sourceKey: 'id_turma'})
  }
  return Aluno;
};