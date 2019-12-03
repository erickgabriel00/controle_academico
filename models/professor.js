  
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Professor = sequelize.define('Professor', {
    matricula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    senha: DataTypes.STRING,
    titulacao: DataTypes.STRING,
    complemento: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    rua: DataTypes.STRING,
    cep: DataTypes.STRING,
    estado: DataTypes.STRING,
    data_vinculo: DataTypes.DATE,
  }, {
    timestamps: false
  });
  Professor.associate = function(models) {
    // associations can be defined here
  };
  return Professor;
};