// app.js

const express = require('express');
const bodyParser = require('body-parser');
const alunosRoutes = require('./routes/alunosRoutes');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api', alunosRoutes);

// Rota para renderizar a página de lista de alunos
app.get('/alunos', (req, res) => {
    // Suponha que você tenha uma variável 'alunos' contendo a lista de alunos
    const alunos = [
        { id: 1, nome: 'Aluno 1', idade: 20 },
        { id: 2, nome: 'Aluno 2', idade: 21 },
        // Adicione mais alunos conforme necessário
    ];

    res.render('alunos', { alunos });
});

// Rota para criar um novo aluno
app.post('/api/alunos', (req, res) => {
    const { nome, idade } = req.body;
    // Lógica para criar um novo aluno no banco de dados (usando Sequelize)
    // Suponha que o novo aluno tenha sido criado e agora você tem o objeto 'aluno' com seus dados
    res.status(201).json(aluno);
});

// Rota para obter informações de um aluno pelo ID
app.get('/api/alunos/:id', (req, res) => {
    const alunoId = req.params.id;
    // Lógica para buscar informações do aluno com o ID fornecido no banco de dados (usando Sequelize)
    // Suponha que você tenha o objeto 'aluno' com os dados do aluno
    if (aluno) {
        res.status(200).json(aluno);
    } else {
        res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }
});

// Rota para atualizar informações de um aluno pelo ID
app.put('/api/alunos/:id', (req, res) => {
    const alunoId = req.params.id;
    const { nome, idade } = req.body;
    // Lógica para atualizar as informações do aluno com o ID fornecido no banco de dados (usando Sequelize)
    // Suponha que o aluno tenha sido atualizado com sucesso e você tenha o objeto 'aluno' com as informações atualizadas
    if (aluno) {
        res.status(200).json(aluno);
    } else {
        res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }
});

// Rota para excluir um aluno pelo ID
app.delete('/api/alunos/:id', (req, res) => {
    const alunoId = req.params.id;
    // Lógica para excluir o aluno com o ID fornecido no banco de dados (usando Sequelize)
    // Suponha que o aluno tenha sido excluído com sucesso
    res.status(204).send(); // 204 significa "Sem Conteúdo"
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
