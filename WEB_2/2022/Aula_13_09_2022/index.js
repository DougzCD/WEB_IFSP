const express = require('express');
const path = require('path');
const dados = require('./resources/dados.json');

const app = express()



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/', (req, res)=>{
    const {usuario, senha} = req.body;
    res.status(202).render('home', {usuario, senha})
})

app.get('/',(req,res)=>{

    const {item,quantidade} = req.query;

    res.render('home',{item, quantidade})
})

app.get('/number',(req, res)=>{

    const num = Math.floor( Math.random()*10);
    
    res.render('number', {num})
});

app.get('/r/:subreddit',(req, res)=>{

    const {subreddit} = req.params;

    const dado = dados[subreddit];
    
    res.render('subreddit', {...dado})
});




app.listen(80, ()=>{
    console.log('Working on port 80!')
});