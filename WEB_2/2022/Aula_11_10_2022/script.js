const express = require('express');
const path = require('path');

const app = express()

const apagaMensagem = async (id)=>{
    const data = await axios.post(`/aluno/${id}?_method=DELETE`);
}

//const alunos = require('./resources/alunos.json');

const alunos = [
    {
        id: 1,
        nome: 'Fulano',
        mediaG: 4
    },
    {
        id: 2,
        nome: "Ciclano",
        mediaG: 5
    },
    {
        id: 3,
        nome: "Beltrano",
        mediaG: 6
    }
]

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));



app.get('/',(req,res)=>{
    
    res.status(200).render('home');
})

app.post('/',(req,res)=>{

    const{nome, aluno} =  req.body;

    id++

    alunos.push({id, nome, mediaG});

    res.status(201).send({id, nome, mediaG})

})

app.get('/aluno',(req,res)=>{
    
    res.status(201).send(alunos);
})

app.get('/aluno/:id',(req,res)=>{

    const {id} = req.params;

    res.status(201).send(alunos[id]);
})

app.get('/aluno/:id/media',(req,res)=>{

    const {id} = req.params;

    res.status(201).send(alunos[id].mediaG);
})

app.get('/aluno/media',(req,res)=>{
    
    const media = mediamedia(sla)

    res.status(201).send(media);
})

const mediamedia = function(sla){

    const sum = alunos.map(element => element.mediaG).reduce((a, b) => a + b, 0);

    const media = sum / myArray.length;

    /*
    alunos.forEach((element) => {
        var mediaT =+ element.mediaG;
        console.log(mediaT);
        return mediaT;
    });
    */

    return media

}

/*app.post('/aluno',(req,res)=>{

    const{nome, mediaG} =  req.body;

    id++

    alunos.push({id, nome, mediaG});

    res.status(201).send({id, nome, mediaG})

    res.status(201).send(alunos);

})*/

app.delete('/aluno/:id',(req,res)=>{
    console.log(req.params);
    const {id} = req.params;
    const u = alunos[id].nome;
    console.log(id);
    alunos.splice(-id, 1);
    res.send("aluno " + id + " de " + u + " foi removido!");
})

/*
    REST
    Recurso: aluno

    Endpoint: /aluno

    CRUD:

    GET     /aluno                 - READ
    GET     /aluno/:id             - READ
    GET     /aluno/:id/aluno       -READ
    POST    /aluno                 - CREATE
    PATCH   /aluno/:id             - UPDATE
    DELETE  /aluno/:id             - DELETE/DESTROY

*/
app.listen(80, ()=>{
    console.log('Working on port 80!')
});