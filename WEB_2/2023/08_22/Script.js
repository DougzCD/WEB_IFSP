const express = require('express');
const app = express()

const porta = 3000;

const soman = (n) =>{
    return parseFloat((n*(n+1))/2);
}

app.get('/soman/:n',(req, res)=>{
    const{n} = req.params;

    console.log(n);
    console.log(soman(n));
    console.log(soman);

    r = soman(n);

    res.send(`<h1>${r}</h1>`);
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