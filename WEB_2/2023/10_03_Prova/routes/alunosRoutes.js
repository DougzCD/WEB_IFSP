// routes/alunosRoutes.js

const express = require('express');
const router = express.Router();
const Aluno = require('../models/aluno');

// Rota para criar um novo aluno
router.post('/alunos', async (req, res) => {
  try {
    const { nome, idade } = req.body;
    const aluno = await Aluno.create({ nome, idade });
    res.json(aluno);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar aluno.' });
  }
});

// Rota para obter informações de um aluno por ID
router.get('/alunos/:id', async (req, res) => {
  try {
    const aluno = await Aluno.findByPk(req.params.id);
    if (aluno) {
      res.json(aluno);
    } else {
      res.status(404).json({ error: 'Aluno não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter aluno.' });
  }
});

// Rota para atualizar informações de um aluno por ID
router.put('/alunos/:id', async (req, res) => {
  try {
    const aluno = await Aluno.findByPk(req.params.id);
    if (aluno) {
      const { nome, idade } = req.body;
      aluno.nome = nome;
      aluno.idade = idade;
      await aluno.save();
      res.json(aluno);
    } else {
      res.status(404).json({ error: 'Aluno não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar aluno.' });
  }
});

// Rota para excluir um aluno por ID
router.delete('/alunos/:id', async (req, res) => {
  try {
    const aluno = await Aluno.findByPk(req.params.id);
    if (aluno) {
      await aluno.destroy();
      res.json({ message: 'Aluno excluído com sucesso.' });
    } else {
      res.status(404).json({ error: 'Aluno não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir aluno.' });
  }
});

module.exports = router;
