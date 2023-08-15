
let text = document.querySelector('p');
let btn = document.querySelector('button');

const conta = async(a, b) =>{

    let x = Number(a.value);
    let y = b.value;

    if (y === 0) {
        
        return Promise.reject("Escreva Um Estado!!!!!");

    } else {
       
        switch (y) {

            case 'MG':
                
                return x * 1.07 ;
        
            case 'SP':
                
                return x * 1.12 ;
    
            
            case 'RJ':
                
                return x * 1.15 ;
    
        
            case 'MS':
    
                return x * 1.08 ;
                
    
            default:
    
                break;
        }
        
    }
        
}


btn.addEventListener('click', async function () {
    let a = document.querySelector('#x');
    let b = document.querySelector('#y');

    try {
      const r = await conta(a, b);
      console.log(r);
      text.innerHTML = 'Preço Final:' + r;
      a.value = '';
      b.value = '';
    } catch (error) {
      console.log(error);
      text.innerHTML = 'Error';
    }
  });