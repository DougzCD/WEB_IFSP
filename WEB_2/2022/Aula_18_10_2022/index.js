const express = require('express');
const methodOverride = require('method-override');

const {comentarios} = require('./controllers');

const app = express();
const path = require('path');


//Configura as variáveis do Node para a View Engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//Permite obter informações do corpo das requisições
app.use(express.urlencoded({extended:true}));

//Define diretório para arquivos estáticos
app.use(express.static('public'));

//Define _method como parâmetro para transformar
// de POST para PATCH ou DELETE
app.use(methodOverride('_method'));

app.use('/comentario', comentarios);


app.listen(80, ()=>{
    console.log('Working on port 80!')
});


/*
   REST
   Recurso: comentario

   Endpoint: /comentario

   CRUD:

   GET    /comentario                   - READ
   GET    /comentario/:id               - READ
   GET    /comentario/:id/comentario    - READ
   POST   /comentario                   - CREATE
   PATCH  /comentario/:id               - UPDATE
   DELETE /comentario/:id               - DELETE/DESTROY


   GET /usuario

*/