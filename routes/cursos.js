var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET curso listing. */
router.get('/', function (req, res, next) {
  model.Curso.findAll({})
      .then(cursos => res.json({
          error: false,
          data: cursos
      }))
      .catch(error => res.json({
          error: true,
          data: [],
          error: error
      }));
});


/* POST curso */
router.post('/', function (req, res, next) {
  const {
    nome,
    tipo
  } = req.body;
  model.Curso.create({
    nome: nome,
    tipo: tipo
      })
      .then(curso => res.status(201).json({
          error: false,
          data: curso,
          message: 'Novo curso foi criado.'
      }))
      .catch(error => res.json({
          error: true,
          data: [],
          error: error
      }));
});


/* update curso */
router.put('/:id', function (req, res, next) {
  const curso_id = req.params.id;
  const { nome, tipo} = req.body;
  model.Curso.update({
    nome: nome,
    tipo: tipo
      }, {
          where: {
              id: curso_id
          }
      })
      .then(curso => res.status(201).json({
          error: false,
          message: 'curso foi atualizado.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});


/* Delete curso. */
router.delete('/:id', function (req, res, next) {
      const curso_id = req.params.id;
      model.Curso.destroy({ where: {
          id: curso_id
      }})
      .then(status => res.status(201).json({
          error: false,
          message: 'curso foi apagado.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});

module.exports = router;