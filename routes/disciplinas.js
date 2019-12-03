var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET Disciplinas listing. */
router.get('/', function (req, res, next) {
  model.Disciplina.findAll({
      include: [{
          model: model.Professor,
          as: 'professor'
      }],
      include: [{
          model: model.Aluno,
          as: 'aluno'
      }],
      include: [{
          model: model.Curso,
          as: 'curso'
      }]
  })
      .then(disciplinas => res.json({
          error: false,
          data: disciplinas
      }))
      .catch(error => res.json({
          error: true,
          data: [],
          error: error
      }));
});


/* POST Disciplinas */
router.post('/', function (req, res, next) {
  const {
    nome,
    area,
    periodo,
    professor_matricula,
    aluno_matricula,
    id_curso 
  } = req.body;
  model.Disciplina.create({
    nome: nome,
    area: area,
    periodo: periodo,
    professor_matricula: professor_matricula,
    aluno_matricula: aluno_matricula,
    id_curso: id_curso
      })
      .then(disciplina => res.status(201).json({
          error: false,
          data: disciplina,
          message: 'nova disciplina foi criada.'
      }))
      .catch(error => res.json({
          error: true,
          data: [],
          error: error
      }));
});

/* update disciplina */
router.put('/:id', function (req, res, next) {
  const disciplina_id = req.params.id;
  const { nome, area, periodo, id_professor, id_aluno, id_curso } = req.body;
  model.Disciplina.update({
    nome: nome,
    area: area,
    periodo: periodo,
    professor_matricula: professor_matricula,
    aluno_matricula: aluno_matricula,
    id_curso: id_curso
      }, {
          where: {
              id: disciplina_id
          }
      })
      .then(disciplina => res.status(201).json({
          error: false,
          message: 'disciplina foi atualizada.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});


/* Delete disciplina. */
router.delete('/:id', function (req, res, next) {
      const disciplina_id = req.params.id;
      model.disciplina.destroy({ where: {
          id: disciplina_id
      }})
      .then(status => res.status(201).json({
          error: false,
          message: 'disciplina foi deletada.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});

module.exports = router;