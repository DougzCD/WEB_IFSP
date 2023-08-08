
let text = document.querySelector('p');
let btn = document.querySelector('button');

const conta = async(a, b) =>{

    let x = Number(a.value);
    let y = text(b.value);

    switch (y) {

        case 'MG':
            
            return x * 1.07 ;

            break;
    
        case 'SP':
            
            return x * 1.12 ;

            break;
        
        case 'RJ':
            
            return x * 1.15 ;

            break;
    
        case 'MS':

            return x * 1.08 ;
            
            break;

        default:

        

            break;
    }

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
        text.innerHTML = "Preço Final:" + `${r}`;
        a = '';
        b = '';

    } catch (error) {
        console.log(error);
        text.innerHTML = 'Error';
    }
     
    

};