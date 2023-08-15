const express = require('express');
const path = require('path');

const app = express()


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/resposta/:endpoint', (req, res)=>{

    

    const {base, altura, calculo} = req.body;

    if (calculo === "A") {
        let resposta = 2 * ( base + altura );

        res.render('resposta/area', {resposta})
    }

    if (calculo === "P") {
        let resposta = base * altura;
        res.render('resposta/perimetro', {resposta})
    }

    else{
        let resposta = "Resposta não encontrada"
        res.render('resposta', {resposta})
    }

    res.status(201).send({base, altura, calculo})

})


app.get('/formulario',(req, res)=>{

    res.redirect('/resposta/:endpoint')

    res.status(200).render('formulario');
    
});


app.listen(80, ()=>{
    console.log('Working on port 80!')
});

