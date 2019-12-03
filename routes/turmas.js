var express = require('express');
var router = express.Router();
var model = require('../models/index');


/* GET Turma listing. */
router.get('/', function (req, res, next) {
  model.Turma.findAll({
      include: [{
          model: model.Curso,
          as: 'curso'
      }]
  })
      .then(turmas => res.json({
          error: false,
          data: turmas
      }))
      .catch(error => res.json({
          error: true,
          data: [],
          error: error
      }));
});


/* POST Turma */
router.post('/', function (req, res, next) {
  const {
    ano,
    semestre,
    id_curso 
  } = req.body;
  model.Turma.create({
    ano: ano,
    semestre: semestre,
    id_curso: id_curso,
      })
      .then(turma => res.status(201).json({
          error: false,
          data: turma,
          message: 'nova Turma foi criada.'
      }))
      .catch(error => res.json({
          error: true,
          data: [],
          error: error
      }));
});


/* update Turma */
router.put('/:id', function (req, res, next) {
  const turma_id = req.params.id;
  const { ano, semestre, id_curso} = req.body;
  model.Turma.update({
    ano: ano,
    semestre: semestre,
    id_curso: id_curso 
      }, {
          where: {
              id: turma_id
          }
      })
      .then(turma => res.status(201).json({
          error: false,
          message: 'turma foi atualizada.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});


/* Delete user. */
router.delete('/:id', function (req, res, next) {
      const turma_id = req.params.id;
      model.Turma.destroy({ where: {
          id: turma_id
      }})
      .then(status => res.status(201).json({
          error: false,
          message: 'turma foi deletada.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});

module.exports = router;