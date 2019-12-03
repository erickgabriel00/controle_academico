  
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Turma = sequelize.define('Turma', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: false,  
    },
    semestre: {
      type: DataTypes.INTEGER,
      allowNull: false,  
    },
    id_curso: {
        type: DataTypes.INTEGER,
        // references: {
        //     model: model.Curso,
        //     key: 'id'
        // }
    }   
  }, {
    timestamps: false,
    tableName: 'turmas'
  });

  Turma.associate = (models) =>{
    Turma.hasOne(models.Curso, {foreignKey: 'id', as: 'curso', sourceKey: 'id_curso'})
  }
  return Turma;
};