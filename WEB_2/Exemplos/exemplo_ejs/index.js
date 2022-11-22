const express = require('express');
const path = require('path');
const dados = require('./dados.json');

const app = express()

//Configura o motor de views e o diretório de 
//armazenamento das views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//app.use();

app.get('/', (req, res)=>{

    const rand = Math.floor( Math.random()*10);

    res.render('home', {rand});
});


app.get('/r/:subreddit', (req, res)=>{
    const {subreddit} = req.params;
    const dado = dados[subreddit];

    if(dado)
        res.render('subreddit', {...dado});
    else
        res.send('<h1>Ooops! Página não encontrada</h1>');
    

});

app.listen(80, ()=>{
    console.log('Working on port 80!');  
});