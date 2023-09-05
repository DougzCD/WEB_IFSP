const express = require('express');
const path = require('path');
const app = express()

const porta = 3000;

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
        earch = `Pesquisa invalida`;
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

/*
    REST
    Recurso: comentario

    Endpoint: /comentario

    CRUD:

    GET     /comentario                 - READ
    GET     /comentario/:id             - READ
    GET     /comentario/:id/comentario  -READ
    POST    /comentario                 - CREATE
    PATCH   /comentario/:id             - UPDATE
    DELETE  /comentario/:id             - DELETE/DESTROY

*/
app.listen(porta, ()=>{
    console.log('Working on port'+ porta +'!')
});