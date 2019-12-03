  
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Administrador = sequelize.define('Administrador', {
    matricula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numero: DataTypes.STRING,
    complemento: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    rua: DataTypes.STRING,
    cep: DataTypes.STRING,
    estado: DataTypes.STRING,
    data_vinculo: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'administradores'
  });
  Administrador.associate = function(models) {
    // associations can be defined here
  };
  return Administrador;
};