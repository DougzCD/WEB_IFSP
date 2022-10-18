const express = require('express');
const methodOverride = require('method-override');

const app = express();
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

let ids = 3;

app.get('/comentario',(req, res)=>{

    res.status(200).render('index', {comentarios});

    //res.status(200).send(comentarios);
});

app.get('/comentario/novo', (req, res)=>{
    res.status(200).render('new');
});

app.get('/comentario/:id', (req, res)=>{
    const {id} = req.params;
    res.status(200).render('edit', {...comentarios[id-1]});
});

//Terminar essa rota
app.get('/comentario/:id/comentario', (req, res)=>{
    const {id} = req.params;
    console.log(id);
    res.status(200).send(comentarios[id].comentario);

});

//Terminar essa rota
app.post('/comentario', (req, res)=>{
    const {usuario, comentario} = req.body;
    ids++;
    console.log({id:ids, usuario, comentario});
    comentarios.push({id: ids, usuario, comentario});
    
    res.status(201).redirect('/comentario');
});


app.patch('/comentario/:id', (req, res)=>{
    const {comentario} = req.body;
    const {id} = req.params;
    comentarios[id-1].comentario = comentario;
    //res.status(200).send(comentarios);
    res.status(200).redirect('/comentario');
});

app.delete('/comentario/:id', (req, res)=>{
    let {id} = req.params;

    comentarios = comentarios.filter(c => c.id != id);
    ids--;
    res.status(200).redirect('/comentario');
    //res.status(200).send(comentarios);
});


// let ids = 3;
// app.get('/comentario',(req, res)=>{
//     res.status(200).send(comentarios);
// });

// app.get('/comentario/:id', (req, res)=>{
//     const {id} = req.params;
//     console.log(id);
//     res.status(200).send(comentarios[id]);

// });

// //Terminar essa rota
// app.get('/comentario/:id/comentario', (req, res)=>{
//     const {id} = req.params;
//     console.log(id);
//     res.status(200).send(comentarios[id].comentario);

// });

// //Terminar essa rota
// app.post('/comentario', (req, res)=>{
//     const {usuario, comentario} = req.body;
//     ids++;
//     console.log({id:ids, usuario, comentario});
//     comentarios.push({id: ids, usuario, comentario});
//     res.status(201).send({id:ids, usuario, comentario});
// });


// app.patch('/comentario/:id', (req, res)=>{
//     const {comentario} = req.body;
//     const {id} = req.params;
    
//     comentarios[id-1].comentario = comentario;

//     res.status(200).send(comentarios);
// });

// app.delete('/comentario/:id', (req, res)=>{
//     let {id} = req.params;

//     comentarios = comentarios.filter(c => c.id != id);
//     ids--;
//     res.status(200).send(comentarios);
// });

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