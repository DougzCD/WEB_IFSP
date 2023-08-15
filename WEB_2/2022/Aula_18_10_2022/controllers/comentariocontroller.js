const {Router} = require('express');
const roteador = Router;
const path = require('path');

let comentarios = [
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

roteador.get('/comentario',(req, res)=>{

    res.status(200).render('index', {comentarios});

    //res.status(200).send(comentarios);
});

roteador.get('/comentario/novo', (req, res)=>{
    res.status(200).render('new');
});

roteador.get('/comentario/:id', (req, res)=>{
    const {id} = req.params;
    res.status(200).render('edit', {...comentarios[id-1]});
});

//Terminar essa rota
roteador.get('/comentario/:id/comentario', (req, res)=>{
    const {id} = req.params;
    console.log(id);
    res.status(200).send(comentarios[id].comentario);

});

//Terminar essa rota
roteador.post('/comentario', (req, res)=>{
    const {usuario, comentario} = req.body;
    ids++;
    console.log({id:ids, usuario, comentario});
    comentarios.push({id: ids, usuario, comentario});
    
    res.status(201).redirect('/comentario');
});


roteador.patch('/comentario/:id', (req, res)=>{
    const {comentario} = req.body;
    const {id} = req.params;
    comentarios[id-1].comentario = comentario;
    //res.status(200).send(comentarios);
    res.status(200).redirect('/comentario');
});

roteador.delete('/comentario/:id', (req, res)=>{
    let {id} = req.params;

    comentarios = comentarios.filter(c => c.id != id);
    ids--;
    res.status(200).redirect('/comentario');
    //res.status(200).send(comentarios);
});



module.exports = roteador;


// let ids = 3;
// roteador.get('/comentario',(req, res)=>{
//     res.status(200).send(comentarios);
// });

// roteador.get('/comentario/:id', (req, res)=>{
//     const {id} = req.params;
//     console.log(id);
//     res.status(200).send(comentarios[id]);

// });

// //Terminar essa rota
// roteador.get('/comentario/:id/comentario', (req, res)=>{
//     const {id} = req.params;
//     console.log(id);
//     res.status(200).send(comentarios[id].comentario);

// });

// //Terminar essa rota
// roteador.post('/comentario', (req, res)=>{
//     const {usuario, comentario} = req.body;
//     ids++;
//     console.log({id:ids, usuario, comentario});
//     comentarios.push({id: ids, usuario, comentario});
//     res.status(201).send({id:ids, usuario, comentario});
// });


// roteador.patch('/comentario/:id', (req, res)=>{
//     const {comentario} = req.body;
//     const {id} = req.params;
    
//     comentarios[id-1].comentario = comentario;

//     res.status(200).send(comentarios);
// });

// roteador.delete('/comentario/:id', (req, res)=>{
//     let {id} = req.params;

//     comentarios = comentarios.filter(c => c.id != id);
//     ids--;
//     res.status(200).send(comentarios);
// });



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