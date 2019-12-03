var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET users listing. */
router.get('/', function (req, res, next) {
  model.Nota.findAll({
      include: [{
          model: model.Disciplina,
          as: 'disciplina'
      }]
  })
      .then(notas => res.json({
          error: false,
          data: notas
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
    nota,
    tipo,
    id_disciplina
  } = req.body;
  model.Nota.create({
    nota: nota,
    tipo: tipo,
    id_disciplina: id_disciplina
      })
      .then(nota => res.status(201).json({
          error: false,
          data: nota,
          message: 'Nova nota foi criada.'
      }))
      .catch(error => res.json({
          error: true,
          data: [],
          error: error
      }));
});


/* update user */
router.put('/:id', function (req, res, next) {
  const nota_id = req.params.id;
  const { nota, tipo} = req.body;
  model.Nota.update({
    nota: nota,
    tipo: tipo
      }, {
          where: {
              id: nota_id
          }
      })
      .then(nota => res.status(201).json({
          error: false,
          message: 'nota foi atualizada.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});


/* Delete user. */
router.delete('/:id', function (req, res, next) {
      const nota_id = req.params.id;
      model.Nota.destroy({ where: {
          id: nota_id
      }})
      .then(status => res.status(201).json({
          error: false,
          message: 'nota foi apagada.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});

module.exports = router;