const express = require('express');
const app = express()

const porta = 80;

app.get('/',(req, res)=>{
    res.send("<h1>Home</h1>");
})

app.get('/:parametro',(req, res)=>{
    const {parametro} = req.params;
    res.send(`<h1>${parametro}+</h1>`);
})

app.get('/Gatos',(req, res)=>{
    res.send("<h1>Gatos</h1>");
})

app.get('/Carros',(req, res)=>{
    res.send("<h1>Carros</h1>");
})

app.get('/Soccer',(req, res)=>{
    res.send("<h1>Soccer</h1>");
})

app.get('*',(req, res)=>{
    res.send("<h1>Sei la nem existe</h1>");
})

app.use((req,res)=>{
    console.log('Recebi requisicao');
    res.send('Resposta servidor');
});

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