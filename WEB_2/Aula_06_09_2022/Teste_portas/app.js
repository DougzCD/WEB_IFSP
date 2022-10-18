const express = require('express');
const app = express();

app.get('/:subreddit', (req, res)=>{
    const subr = req.params.subreddit
    res.send(`Benvindo a ${subr}`);
});

app.get('/busca', (req, res)=>{
    const {q} = req.query;

    if (q) {
        res.send(`<h1>Resposta paara a Busca:${q}</h1>`);
    }else{
        res.send(`Nada Buscado`);
    }
    
});

app.get('/math', (req, res)=>{
    res.send("<h1>Math</h1>");
});

app.get('/', (req, res)=>{
    res.send("<h1>HOME!</h1>");
});

app.use((req, res)=>{
    console.log("Recebi uma requisição HTTP");
    res.send("Resposta do servidor!");
});

app.listen(80, ()=>{
    console.log("Escutando a porta 80")
});

