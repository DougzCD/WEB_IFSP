const express = require('express');
const path = require('path');
const app = express()

const porta = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    const num = Math.floor(Math.random()*10);
    res.status(200).render('home', {num});
});

app.get('/results',(req,res)=>{

    const search = req.query.search;

    console.log(search);

    if(!search){
        let resp = `Pesquisa invalida`;
        res.status(200).render('results', {resp});
    }
    else{

        
        let resp = `Apresentando resultados de ${search}`
        res.status(200).render('results', {resp});
    }
    
})

app.post('/results',(req,res)=>{

    const {search} =  req.body;

    
    res.status(201).redirect(`/results?search=${search}`);

})

app.get('/temper',(req,res)=>{

    const search = req.query.search;
    const type = search.slice(-1);
    const temp = search.substring(0,type);
    let resp = 0;
    
    console.log(search);
    console.log(search.lastIndexOf(""));
    console.log(search.slice(-1));
    

    if(!search){
        let resp = `valores invalidos`;
        res.status(200).render('temper', {resp});
    }
    else{

        switch (type) {
            case "k":
                
                resp = temp + 274.15;

                res.status(200).render('temper', {resp});

                break;

            case "f":
                
                resp = ((temp*9)/5)+32;

                res.status(200).render('temper', {resp});

                break;
        
            default:
                break;
        }
        
        
    }
    
})

app.post('/temper',(req,res)=>{

    const {temper, type} =  req.body;

    
    res.status(201).redirect(`/temper?search=${temper}`+`${type}`);

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