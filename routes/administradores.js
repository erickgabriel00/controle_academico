var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET users listing. */
router.get('/', function (req, res, next) {
  model.Administrador.findAll({})
      .then(administradores => res.json({
          error: false,
          data: administradores
      }))
      .catch(error => res.json({
          error: true,
          data: [],
          error: error
      }));
});


/* POST users */
router.post('/', function (req, res, next) {
  const {
    matricula,
    senha,
    numero,
    complemento,
    cidade,
    bairro,
    rua,
    cep,
    estado, 
    data_vinculo,
  } = req.body;
  model.Administrador.create({
    matricula: matricula,
    senha: senha,
    numero: numero,
    complemento: complemento,
    cidade: cidade,
    bairro: bairro,
    rua: rua,
    cep: cep,
    estado: estado, 
    data_vinculo: data_vinculo,
      })
      .then(administrador => res.status(201).json({
          error: false,
          data: administrador,
          message: 'New administrador has been created.'
      }))
      .catch(error => res.json({
          error: true,
          data: [],
          error: error
      }));
});


/* update user */
router.put('/:matricula', function (req, res, next) {
  const administrador_matricula = req.params.matricula;
  const { matricula, senha, numero, complemento, cidade, bairro, rua, cep, estado, data_vinculo} = req.body;
  model.Administrador.update({
    matricula: matricula,
    senha: senha,
    numero: numero,
    complemento: complemento,
    cidade: cidade,
    bairro: bairro,
    rua: rua,
    cep: cep,
    estado: estado, 
    data_vinculo: data_vinculo,
      }, {
          where: {
              matricula: administrador_matricula
          }
      })
      .then(administrador => res.status(201).json({
          error: false,
          message: 'admin has been updated.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});


/* Delete user. */
router.delete('/:matricula', function (req, res, next) {
      const administrador_matricula = req.params.matricula;
      model.Administrador.destroy({ where: {
          matricula: administrador_matricula
      }})
      .then(status => res.status(201).json({
          error: false,
          message: 'admin has been delete.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});

module.exports = router;