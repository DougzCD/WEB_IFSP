const express = require('express');
const path = require('path');
const app = express()
const fs = require('fs');

const porta = 3000;
const dados = require('./resources/dados.json');
const pessoas = require('./resources/pessoas.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({extended:true}));
app.use(express.static('WEB_IFSP\public'));

app.get('/',(req,res)=>{
    res.status(200).render('home');
});

app.get('/number',(req,res)=>{
    const num = Math.floor(Math.random()*10);
    res.status(200).render('number', {num});
});

app.get('/search',(req,res)=>{

    let {search} = req.query;

    console.log(search);

    if(!search){
        search = `Pesquisa invalida`;
        res.status(200).render('search', {search});
    }else{

        search = `Apresentando resultados de ${search}`
        res.status(200).render('search', {search});
    }
    
})

app.get('/temper',(req,res)=>{

    let {type, temp} = req.query;
    
    console.log(type);
    console.log(temp);
    

    if(!temp || isNaN(temp)){
        type = `Valores Invalidos`;
        res.status(200).render('temper', {temp, type});
    }else{

        switch (type) {

            case 'k':
                
                temp = parseFloat(temp) + 274.15;
                break;

            case 'f':
                
                temp = (parseFloat(temp) * 9) / 5 + 32;
                break;
        
            default:

                type = 'Tipo de temperatura desconhecido';
                break;
        }

        res.status(200).render('temper', { temp, type });

    }
    
})

app.get('/estoq',(req,res)=>{

    let {produto, quant} =  req.query;

    if (!produto) {
        produto = `Produto não especificado!`
    }
    if (!quant) {
        quant = `Quantidade não especificada!`
    }

    res.status(200).render('estoq', {produto, quant});

})

app.post('/estoq',(req,res)=>{

    let {produto, quant} =  req.body;

    if (!produto) {
        produto = `Produto não especificado!`
    }
    if (!quant) {
        quant = `Quantidade não especificada!`
    }

    res.status(200).render('estoq', {produto, quant});

})

app.get('/subreddit',(req,res)=>{
    
    let {subreddit} = req.query;

    console.log(subreddit);

    if(!subreddit){
        
        res.status(200).render('subreddit', {subreddit});
        
    }else{
        
        res.status(200).redirect(`/r/${subreddit}`);
    }
    
})

app.get('/r/:subreddit',(req,res)=>{
    let {subreddit} = req.params;

    console.log(subreddit);

    let dado = dados[subreddit];

    if(dado)
        res.status(200).render(`r`, {dado, ...dado});
    else
        res.status(200).redirect('/erro');
    
})

app.get('/pessoa',(req,res)=>{

    let {id} = req.query;

    console.log(id);

    if (id) {
        res.status(200).redirect(`/pessoa/${id}`);
    }else{

        if(pessoas)
            res.status(200).render('pessoa', {pessoas});
        else
            res.status(200).redirect('/erro');
    }

})

app.get('/pessoa/:id',(req,res)=>{

    let {id} = req.params;

    console.log(id);

    let pessoas = pessoas.find(pessoa => pessoa.id === parseInt(id));

    if(pessoas)
        res.status(200).render(`pessoa`, {pessoas});
    else
        res.status(200).redirect('/erro');

})

app.post('/pessoa',(req,res)=>{

    const{nome, nascimento} =  req.body;

    let newID = pessoas.length + 1;

    let novaPessoa = {
        id: newID,
        nome: nome,
        nascimento: nascimento
    };

    fs.readFile('WEB_2/2023/TESTE/resources/pessoas.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Erro ao ler o arquivo JSON");
            return;
        }

        let pessoas = JSON.parse(data); // Parse JSON para um objeto JavaScript

        // Adicione a nova pessoa ao array de pessoas
        pessoas.push(novaPessoa);

        // Escreva os dados atualizados de volta para o arquivo JSON
        fs.writeFile('WEB_2/2023/TESTE/resources/pessoas.json', JSON.stringify(pessoas, null, 2), 'utf8', (err) => {
            if (err) {
                console.error(err);
                res.status(500).send("Erro ao escrever no arquivo JSON");
                return;
            }
        });
    });

    res.status(200).render(`pessoa`, {pessoas});

})

app.delete('/pessoa/:id',(req,res)=>{

    console.log(req.params);

    const {id} = req.params;

    if (isNaN(id)) {
        res.status(400).send("ID inválido");
        return;
    }

    const idNumero = parseInt(id);

    if (idNumero < 0 || idNumero >= pessoas.length) {
        res.status(404).send("Pessoa não encontrada");
        return;
    }

    const pessoaRemovida = pessoas.splice(idNumero, 1)[0];

    res.status(200).send(`Pessoa com ID ${idNumero} e nome ${pessoaRemovida.nome} foi removida!`);
})

app.get('*:pagina',(req,res)=>{

    let {pagina} = req.params;

    console.log(pagina);
       
    res.status(200).render('erro', {pagina});
       
})

/*
    REST
    Recurso: comentario

    Endpoint: /comentario

    CRUD:

    GET     /comentario                 - READ
    GET     /comentario/:id             - READ
    GET     /comentario/:id/comentario  - READ
    POST    /comentario                 - CREATE
    PATCH   /comentario/:id             - UPDATE
    DELETE  /comentario/:id             - DELETE/DESTROY

*/
app.listen(porta, ()=>{
    console.log('Working on port'+ porta +'!')
});