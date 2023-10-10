const express = require('express');
const bodyParser = require('body-parser');
const { Aluno } = require('./models'); // Importe o modelo Aluno
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rotas CRUD para Alunos

// Rota para criar um novo aluno
app.post('/alunos', async (req, res) => {
  try {
    const aluno = await Aluno.create(req.body);
    res.status(201).json(aluno);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar o aluno.' });
  }
});

// Rota para obter informações de um aluno por ID
app.get('/alunos/:id', async (req, res) => {
  const { id } = req.params;
  const aluno = await Aluno.findByPk(id);

  if (aluno) {
    res.json(aluno);
  } else {
    res.status(404).json({ error: 'Aluno não encontrado.' });
  }
});

// Rota para atualizar informações de um aluno por ID
app.put('/alunos/:id', async (req, res) => {
  const { id } = req.params;
  const aluno = await Aluno.findByPk(id);

  if (aluno) {
    await aluno.update(req.body);
    res.json(aluno);
  } else {
    res.status(404).json({ error: 'Aluno não encontrado.' });
  }
});

// Rota para excluir um aluno por ID
app.delete('/alunos/:id', async (req, res) => {
  const { id } = req.params;
  const aluno = await Aluno.findByPk(id);

  if (aluno) {
    await aluno.destroy();
    res.json({ message: 'Aluno excluído com sucesso.' });
  } else {
    res.status(404).json({ error: 'Aluno não encontrado.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
