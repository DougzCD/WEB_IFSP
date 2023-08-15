const {Router} = require('express');
const {Usuario, Comentario} = require('../models');
const roteador = require('./comentariosController');

roteador = Router();

roteador.get('/login', (req, res)=>{
    res.status().render('login');
});

roteador.get('/logoff',(req, res)=>{
    
})

roteador.post('/login', async (req, res)=>{
    const {login, senha}=req.body;

    const resposta = await Usuario.findOne({
        where:{
            login: login,
            senha: senha
        }
    });
    req.session.login = false;

    if(resposta){
        req.session.login = true;
        res.redirect('/comentario');
    }

    
});

roteador.get('/', async (req, res)=>{
    const usuarios = await Usuario.findAll({
        include:[{model:Comentario}]
    });

    res.status(200).send(usuarios);

    //res.status(200).send(comentarios);
});

roteador.get('/novo', (req, res)=>{
    
});

roteador.get('/:id', async (req, res)=>{
    
});

roteador.post('/', async (req, res)=>{
    
});

roteador.patch('/:id', async (req, res)=>{
    
});

roteador.delete('/:id', async (req, res)=>{
    
});

module.exports = roteador;