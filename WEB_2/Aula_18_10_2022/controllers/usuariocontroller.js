const {Router} = require('express');
const roteador = Router;
const path = require('path');

let usuarios = [
    {
        id: 1,
        usuario: 'Fulano',
        comentario: 'Comentário do Fulano'
    },
    {
        id: 2,
        usuario: 'Ciclano',
        comentario: 'Fulano, seu comentário é muito ruim!'
    },
    {
        id: 3,
        usuario: 'Beltrano',
        comentario: 'Só li verdades.'
    }
];

let ids = 3;

roteador.get('/',(req, res)=>{

    res.status(200).render('index', {usuarios});

    //res.status(200).send(usuarios);
});

roteador.get('/novo', (req, res)=>{
    res.status(200).render('new');
});

roteador.get('/:id', (req, res)=>{
    const {id} = req.params;
    res.status(200).render('edit', {...usuarios[id-1]});
});

//Terminar essa rota
roteador.get('/:id/comentario', (req, res)=>{
    const {id} = req.params;
    console.log(id);
    res.status(200).send(usuarios[id].comentario);

});

//Terminar essa rota
roteador.post('/', (req, res)=>{
    const {usuario, comentario} = req.body;
    ids++;
    console.log({id:ids, usuario, comentario});
    usuarios.push({id: ids, usuario, comentario});
    
    res.status(201).redirect('/');
});


roteador.patch('/:id', (req, res)=>{
    const {comentario} = req.body;
    const {id} = req.params;
    usuarios[id-1].comentario = comentario;
    //res.status(200).send(usuarios);
    res.status(200).redirect('/');
});

roteador.delete('/:id', (req, res)=>{
    let {id} = req.params;

    usuarios = usuarios.filter(c => c.id != id);
    ids--;
    res.status(200).redirect('/');
    //res.status(200).send(usuarios);
});



module.exports = roteador;



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