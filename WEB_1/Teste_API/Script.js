let text = document.querySelector('p');
let btn = document.querySelector('button');

/*const conta = async(a, b) =>{

    let x = Number(a.value);
    let y = Number(b.value);

    if (y == 0) {
        
        return Promise.reject("NÃO HA DIVISÃO POR 0!!!!!");

    } else {
       
        return x / y ;
    }
        
}*/

const CEP = async(x) =>{

    const cep = Number(x.value);

    const obj = await axios.get(`https://viacep.com.br/ws/${cep}/json//`);

    return obj;

}

btn.addEventListener('click', function(){

    const x = document.querySelector('#cep');

    assincrona(x)
});

async function assincrona(x) {
    
    try {

        const r = await CEP(x);

        console.log(r);

        JSON.parse('r');

        x = '';

    } catch (error) {
        console.log(error);
        text.innerHTML = 'Error';
    }
     
    

};
