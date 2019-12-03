  
'use strict';
const Disciplina = require('./disciplina')
module.exports = (sequelize, DataTypes) => {
  var Nota = sequelize.define('Nota', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nota: DataTypes.DECIMAL(4),
    tipo: DataTypes.INTEGER,
    id_disciplina: {
        type: DataTypes.INTEGER,
        allowNull: false,  
        // references: {
        //     model: Nota,
        //     key: 'id'
        // }
    } 
  }, {
    timestamps: false,
    tableName: 'notas'
  });

  Nota.associate = (models) =>{
    Nota.hasOne(models.Disciplina, {foreignKey: 'id', as: 'disciplina', sourceKey: 'id_disciplina'})
  }
  return Nota;
};