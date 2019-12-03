var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET users listing. */
router.get('/', function (req, res, next) {
  model.Aluno.findAll({})
      .then(alunos => res.json({
          error: false,
          data: alunos
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
    data_vinculo,
    senha,
    complemento,
    cidade,
    bairro,
    rua,
    cep,
    estado,
    id_turma: id_turma, 
    nome
  } = req.body;
  model.Aluno.create({
    matricula: matricula,
    data_vinculo: data_vinculo,
    senha: senha,
    complemento: complemento,
    cidade: cidade,
    bairro: bairro,
    rua: rua,
    cep: cep,
    estado: estado,
    id_turma: id_turma,
    nome: nome
      })
      .then(aluno => res.status(201).json({
          error: false,
          data: aluno,
          message: 'New Aluno has been created.'
      }))
      .catch(error => res.json({
          error: true,
          data: [],
          error: error
      }));
});


/* update user */
router.put('/:matricula', function (req, res, next) {
  const aluno_matricula = req.params.matricula;
  const { matricula, data_vinculo, senha, complemento, cidade, bairro, rua, cep, estado, id_turma, nome} = req.body;
  model.Aluno.update({
    matricula: matricula,
    data_vinculo: data_vinculo,
    senha: senha,
    complemento: complemento,
    cidade: cidade,
    bairro: bairro,
    rua: rua,
    cep: cep,
    estado: estado, 
    id_turma: id_turma, 
    nome: nome
      }, {
          where: {
              matricula: aluno_matricula
          }
      })
      .then(aluno => res.status(201).json({
          error: false,
          message: 'aluno has been updated.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});


/* Delete user. */
router.delete('/:matricula', function (req, res, next) {
      const aluno_matricula = req.params.matricula;
      model.Aluno.destroy({ where: {
          matricula: aluno_matricula
      }})
      .then(status => res.status(201).json({
          error: false,
          message: 'aluno has been delete.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});

module.exports = router;