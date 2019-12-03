var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET users listing. */
router.get('/', function (req, res, next) {
  model.Aluno.findAll({
      include: [{
          model: model.Turma,
          as: 'turma'
      }]
  })
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
    nome,
    id_turma 
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
    nome: nome,
    id_turma: id_turma
      },{
          include: [{
              model: model.Turma,
              as: 'turma'
          }]
      })
      .then(aluno => res.status(201).json({
          error: false,
          data: aluno,
          message: 'Novo Aluno foi criado.'
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
    nome: nome,
    id_turma: id_turma 
      }, {
          where: {
              matricula: aluno_matricula
          }
      })
      .then(aluno => res.status(201).json({
          error: false,
          message: 'Aluno foi atualizado.'
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
          message: 'Aluno foi deletado.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});

module.exports = router;