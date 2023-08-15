const express = require('express');
const path = require('path');

const app = express()

//const dados = require('./resources/dados.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({extended:true}));

//app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res)=>{
    
    res.status(200).render('home');
})

app.post('/',(req,res)=>{

    const{usuario, comentario} =  req.body;

    id++

    dados.push({id, usuario, comentario});

    res.status(201).send({id, usuario, comentario})

})

app.get('/comentario',(req,res)=>{
    
    res.status(201).send(dados);
})

app.get('/comentario/:id',(req,res)=>{

    const {id} = req.params;

    res.status(201).send(dados[id]);
})

app.get('/comentario/:id/comentario',(req,res)=>{

    const {id} = req.params;

    res.status(201).send(dados[id].comentario);
})

app.post('/comentario',(req,res)=>{

    const{usuario, comentario} =  req.body;

    id++

    dados.push({id, usuario, comentario});

    res.status(201).send({id, usuario, comentario})

    res.status(201).send(dados);

})

app.delete('/comentario/:id',(req,res)=>{
    console.log(req.params);
    const {id} = req.params;
    const u = dados[id].usuario;
    console.log(id);
    dados.splice(-id, 1);
    res.send("comentario " + id + " de " + u + " foi removido!");
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
app.listen(80, ()=>{
    console.log('Working on port 80!')
});