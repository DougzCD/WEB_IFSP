
function venda(event) {
    
    let v = document.querySelector("#valor");
    let e = document.querySelector("#estado");


    switch (e.value) {
        case "MG":

            text.textContent = `R\$${(v.value * 107) / 100}`;

            break;
        
        case "SP":

            text.textContent = `R\$${(v.value * 112) / 100}`;

            break;
    
        case "RJ":

            text.textContent = `R\$${(v.value * 115) / 100}`;

            break;
    
        case "MS":

            text.textContent = `R\$${(v.value * 108) / 100}`;

            break;
    
        default:
            text.textContent = "Estado Invalido!"
            break;
    }
    event.preventDefault();
    return false;
}

var text = document.getElementById('text');
let screenLog = document.querySelector('#screenlog');

let v = document.querySelector("#valor");
let e = document.querySelector("#estado");

let btn = document.querySelector("#bot");
btn.addEventListener('click', venda);