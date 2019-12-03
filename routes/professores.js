var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET professores listing. */
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


/* POST professores */
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
          message: 'novo professor foi criado.'
      }))
      .catch(error => res.json({
          error: true,
          data: [],
          error: error
      }));
});


/* update professores */
router.put('/:matricula', function (req, res, next) {
  const professor_matricula = req.params.matricula;
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
            matricula: professor_matricula
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
      const professor_matricula = req.params.matricula;
      model.Professor.destroy({ where: {
        matricula: professor_matricula
      }})
      .then(status => res.status(201).json({
          error: false,
          message: 'professor foi deletado.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});

module.exports = router;