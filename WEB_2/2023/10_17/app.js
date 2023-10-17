const express = require('express');
const bodyParser = require('body-parser');
const { City } = require('./models'); // Importe o modelo City
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rotas CRUD para Cidades

// Rota para criar uma novo Cidade
app.post('/city', async (req, res) => {
  try {
    const city = await City.create(req.body);
    res.status(201).json(city);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar uma cidade.' });
  }
});

// Rota para obter informações de uma cidade por ID
app.get('/city/:id', async (req, res) => {
  const { id } = req.params;
  const city = await City.findByPk(id);

  if (city) {
    res.json(city);
  } else {
    res.status(404).json({ error: 'Cidade não encontrada.' });
  }
});

// Rota para atualizar informações de uma cidade por ID
app.put('/city/:id', async (req, res) => {
  const { id } = req.params;
  const city = await City.findByPk(id);

  if (city) {
    await city.update(req.body);
    res.json(city);
  } else {
    res.status(404).json({ error: 'Cidade não encontrada.' });
  }
});

// Rota para excluir uma cidade por ID
app.delete('/city/:id', async (req, res) => {
  const { id } = req.params;
  const city = await City.findByPk(id);

  if (city) {
    await city.destroy();
    res.json({ message: 'Cidade excluída com sucesso.' });
  } else {
    res.status(404).json({ error: 'Cidade não encontrada.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
