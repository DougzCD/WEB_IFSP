const express = require('express');
const app = express()

const porta = 80;

app.use((req,res)=>{
    console.log('Recebi requisicao');
    res.send('Resposta servidor');
});

app.get('/',(req, res)=>{
    res.send("<h1>Sei la</h1>");
})

/*
    REST
    Recurso: comentario

    Endpoint: /comentario

    CRUD:

    GET     /comentario                 - READ
    GET     /comentario/:id             - READ
    GET     /comentario/:id/comentario  -READ
    POST    /comentario                 - CREATE
    PATCH   /comentario/:id             - UPDATE
    DELETE  /comentario/:id             - DELETE/DESTROY

*/

app.listen(porta, ()=>{
    console.log('Working on port'+ porta +'!')
});