
let text = document.querySelector('p');
let btn = document.querySelector('button');

const arrayNumeros = [1,2,'seila',2.3,[3,4]];

class Animal{

    

}



btn.addEventListener('click', async function () {

    try {

        for (let index = 0; index < arrayNumeros.length; index++) {

            const element = arrayNumeros[index];

            text.innerHTML += element;
        
            console.log(element);
            
        }

    } catch (error) {
      console.log(error);
      text.innerHTML = 'Error';
    }
  });