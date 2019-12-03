  
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Curso = sequelize.define('Curso', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false    
    },
  }, {
    timestamps: false,
    tableName: 'cursos'
  });
  return Curso;
};