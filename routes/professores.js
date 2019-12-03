var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET users listing. */
router.get('/', function (req, res, next) {
  model.Professor.findAll({})
      .then(professores => res.json({
          error: false,
          data: professores
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
    titulacao,
    complemento,
    cidade,
    bairro,
    rua,
    cep,
    estado, 
    data_vinculo
  } = req.body;
  model.Professor.create({
    matricula: matricula,
    senha: senha,
    titulacao: titulacao,
    complemento: complemento,
    cidade: cidade,
    bairro: bairro,
    rua: rua,
    cep: cep,
    estado: estado, 
    data_vinculo: data_vinculo
      })
      .then(professor => res.status(201).json({
          error: false,
          data: professor,
          message: 'New professor has been created.'
      }))
      .catch(error => res.json({
          error: true,
          data: [],
          error: error
      }));
});


/* update user */
router.put('/:matricula', function (req, res, next) {
  const professor_matricula = req.params.professor;
  const { matricula, senha, titulacao, complemento, cidade, bairro, rua, cep, estado, data_vinculo} = req.body;
  model.Professor.update({
    matricula: matricula,
    senha: senha,
    titulacao: titulacao,
    complemento: complemento,
    cidade: cidade,
    bairro: bairro,
    rua: rua,
    cep: cep,
    estado: estado, 
    data_vinculo: data_vinculo,
      }, {
          where: {
            professor: professor_matricula
          }
      })
      .then(professor => res.status(201).json({
          error: false,
          message: 'professor has been updated.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});


/* Delete user. */
router.delete('/:matricula', function (req, res, next) {
      const professor_matricula = req.params.professor;
      model.Professor.destroy({ where: {
        professor: professor_matricula
      }})
      .then(status => res.status(201).json({
          error: false,
          message: 'professor has been delete.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});

module.exports = router;