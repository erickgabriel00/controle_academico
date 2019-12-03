  
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Professor = sequelize.define('Professor', {
    matricula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    titulacao: DataTypes.STRING,
    complemento: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    rua: DataTypes.STRING,
    cep: DataTypes.STRING,
    estado: DataTypes.STRING,
    data_vinculo: {
      allowNull: false,
      type: DataTypes.DATE
    },
  }, {
    timestamps: false,
    tableName: 'professores'
  });
  Professor.associate = function(models) {
    // associations can be defined here
  };
  return Professor;
};