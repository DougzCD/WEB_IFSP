/*let array = document.querySelectorAll('p');

array.forEach(function (el) {

    el.addEventListener('mouseover',function () {
        
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
    
        el.style.color = `rgb(${x}, ${y}, ${z})`;

    });

});*/

let text = document.querySelector('p');
let btn = document.querySelector('button');

const conta = async(a, b) =>{

    let x = Number(a.value);
    let y = Number(b.value);

    if (y == 0) {
        
        return Promise.reject("NÃO HA DIVISÃO POR 0!!!!!");

    } else {
       
        return x / y ;
    }
        
}


btn.addEventListener('click', function(){

    let a = document.querySelector("#x");
    let b = document.querySelector("#y");

    assincrona(a,b)
});

async function assincrona(a, b) {
    
    try {
        const r = await conta(a,b);
        console.log(r);
        text.innerHTML = "Resposta:" + `${r}`;
        a = '';
        b = '';

    } catch (error) {
        console.log(error);
        text.innerHTML = 'Error';
    }
     
    

};
