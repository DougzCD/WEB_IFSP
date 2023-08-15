const express = require('express');

const app = express();

const {comentarios, usuarios} = require('.models')

const umDia = 1000*60*60*24;
const sessionOptions = {
    secret: "frasealeatoria",
    cookie: {maxAge: umDia},
    resave: false,
    saveUninitializes: false
}

app.use(session(sessionOptions))

const secure_pass = (req, res, next)=>{
    if(req.session.login || 
        req.path==='/usuario/login'){
            next();
        }else{
            res.redirect('/usuario/login');
        }
}

app.use(express.urlencoded({extended:true}));

app.get('/usuario',(req, res)=>{
    res.status(200).send(usuarios);
});

app.get(secure_pass)

app.get('/comentario',(req, res)=>{
    res.status(200).send(comentarios);
});

app.get('/comentario/:id', (req, res)=>{
    const {id} = req.params;
    console.log(id);
    res.status(200).send(comentarios[id]);

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
    res.status(201).send({id:ids, usuario, comentario});
});


app.patch('/comentario/:id', (req, res)=>{
    const {comentario} = req.body;
    const {id} = req.params;
    
    comentarios[id-1].comentario = comentario;

    res.status(200).send(comentarios);
});

app.delete('/comentario/:id', (req, res)=>{
    const {id} = req.params;

});


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