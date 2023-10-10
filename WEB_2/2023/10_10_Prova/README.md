# API CRUD Aluno

Esta é uma API CRUD simples para gerenciar informações de alunos usando Node.js, Express.js e Sequelize com um banco de dados MySQL.

## Requisitos

Certifique-se de ter o Node.js e o MySQL instalados em seu sistema antes de prosseguir.

## Configuração do Banco de Dados

1. Crie um banco de dados MySQL e um usuário com permissões apropriadas.
2. Abra o arquivo `config/config.json` e atualize as informações de conexão do banco de dados com as credenciais que você configurou.

## Instalação

1. Clone este repositório para o seu sistema.

```bash
git clone https://github.com/seu-usuario/api-crud-aluno.git
```

2. Acesse o diretório do projeto.

```bash
cd api-crud-aluno
```

3. Instale as dependências necessárias.

```bash
npm install
```

## Executando a API

1. Inicie o servidor da API.

```bash
node app.js
```

A API estará disponível em http://localhost:3000.

## Testando as Operações CRUD

Você pode testar as operações CRUD usando uma ferramenta como o Postman ou o cURL. Aqui estão exemplos de como usar o cURL para testar as operações:

1. Criar um novo aluno.

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "Douglas", "age": 22}' http://localhost:3000/alunos
```

2. Obter informações de um aluno por ID.

Substitua :id pelo ID do aluno que você deseja obter.

```bash
curl http://localhost:3000/alunos/:id
```

3. Atualizar informações de um aluno por ID.

Substitua :id pelo ID do aluno que você deseja atualizar.

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"name": "João Silva", "age": 21}' http://localhost:3000/alunos/:id
```

4. Excluir um aluno por ID.

Substitua :id pelo ID do aluno que você deseja excluir.

```bash
curl -X DELETE http://localhost:3000/alunos/:id
```

Lembre-se de adaptar os exemplos acima de acordo com sua configuração local e os IDs dos alunos que você criou.

Isso é tudo! Agora você pode executar a API localmente e testar as operações CRUD para gerenciar os alunos.
