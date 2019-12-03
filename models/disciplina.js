  
'use strict';
const Curso = require('./curso')
const Aluno = require('./aluno')
const Professor = require('./professor')

module.exports = (sequelize, DataTypes) => {
  var Disciplina = sequelize.define('Disciplina', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
        allowNull: false,
        type: DataTypes.STRING
      },
      area: {
        allowNull: false,
        type: DataTypes.STRING
      },
      periodo: {
        allowNull: false,
        type: DataTypes.STRING
      },
      professor_matricula: {
        type: DataTypes.INTEGER,
        // references: {
        //     model: Professor,
        //     key: 'matricula'
        // }
      },
      aluno_matricula: {
        type: DataTypes.INTEGER,
        // references: {
        //     model: Aluno,
        //     key: 'matricula'
        // }
      },
      id_curso: {
        type: DataTypes.INTEGER,
        // references: {
        //     model: Curso,
        //     key: 'id'
        // }
      }
  }, {
    timestamps: false,
    tableName: 'disciplinas'
  });

  Disciplina.associate = (models) =>{
    Disciplina.hasOne(models.Professor, {foreignKey: 'matricula', as: 'professor', sourceKey: 'professor_matricula'})
  }
  Disciplina.associate = (models) =>{
    Disciplina.hasOne(models.Aluno, {foreignKey: 'matricula', as: 'aluno', sourceKey: 'aluno_matricula'})
  }
  Disciplina.associate = (models) =>{
    Disciplina.hasOne(models.Curso, {foreignKey: 'id', as: 'curso', sourceKey: 'id_curso'})
  }
  return Disciplina;
};