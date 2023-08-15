const express = require('express');
const app = express();

app.get('/n/:numero', (req, res)=>{

    let c = 0;
    const {numero} = req.params;

    for (let i = 0; i <=numero; i++) {
        if (numero % i == 0) {
            c++;
        }
    }

    if (c == 2) {
        res.send(`${numero} é um numero primo!`);
    }else {
        res.send(`${numero} não é um numero primo`);
    }
    
});

app.get('/n', (req, res)=>{

    let c = 0;
    const {n} = req.query;

    for (let i = 0; i <=n; i++) {
        if (n % i == 0) {
            c++;
        }
    }

    if (c == 2) {
        res.send(`${n} é um numero primo!`);
    }else {
        res.send(`${n} não é um numero primo`);
    }
    
});

/*app.use((req, res)=>{
    console.log("Recebi uma requisição HTTP");
    res.send("Resposta do servidor!");
});*/

app.listen(80, ()=>{
    console.log("Escutando a porta 80")
});