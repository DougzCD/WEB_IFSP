const express = require('express');
const path = require('path');

const app = express()

const fornecedores = [

    {

        id: 1,

        nome: 'Empresa X',

        totalCompras: 250

    },

    {

        id: 2,

        nome: 'Empresa Y',

        totalCompras: 3502

    },

    {

        id: 3,

        nome: 'Empresa Z',

        totalCompras: 4562

    }

]

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({extended:true}));



app.get('/',(req,res)=>{
    
    res.status(200).render('home');
})

app.post('/',(req,res)=>{

    const{nome, totalCompras} =  req.body;

    id++

    fornecedores.push({id, nome, totalCompras});

    res.status(201).send({id, nome, totalCompras})

})

app.get('/fornecedor',(req,res)=>{
    
    res.status(201).send(fornecedores);
})

app.get('/fornecedor/:id',(req,res)=>{

    const {id} = req.params;

    const fornecedor = fornecedores.find(element => element.id == id);
    console.log(fornecedor);

    res.status(200).render('fornecedores', {fornecedor});
})

app.get('/fornecedor/:id/totalCompras',(req,res)=>{

    const {id} = req.params;

    const fornecedor = fornecedores.find(element => element.id == id);
    console.log(fornecedor);

    console.log(fornecedor.totalCompras);

    res.sendStatus(201).send(fornecedor.totalCompras);
})

app.get('/fornecedor/soma',(req,res)=>{
    
    const soma = fornecedores.map(element => element.totalCompras).reduce((a, b) => a + b, 0);
    console.log(soma);

    fornecedores.forEach((element, index, array) => {
        console.log(element.x); 
        console.log(index);
        console.log(array);
    });

    res.status(201).send(soma);
})

app.get('/',(req,res)=>{
    
    res.status(200).render('home');
})

app.get('/fornecedor/delete',(req,res)=>{
    
    res.status(200).render('delete');
})

app.delete('/fornecedor/:id',(req,res)=>{

    console.log(req.params);

    const {id} = req.params;

    console.log(id);

    const fornecedor = fornecedores.find(element => element.id == id);

    const u = fornecedor.nome;
    
    fornecedores.splice(-id, 1);
    res.send("O Fornecedor " + u + " com id" + id + " foi removido!");
})

/*
    REST
    Recurso: fornecedor

    Endpoint: /fornecedor

    CRUD:

    GET     /fornecedor                 - READ
    GET     /fornecedor/:id             - READ
    GET     /fornecedor/soma            - READ
    DELETE  /fornecedor/:id/delete      - DELETE/DESTROY

*/
app.listen(80, ()=>{
    console.log('Working on port 80!')
});