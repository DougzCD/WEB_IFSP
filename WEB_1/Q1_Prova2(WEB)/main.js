
var text = document.getElementById('text');
var btn = document.querySelector("#bot");

document.addEventListener('keydown', apagar, false);
btn.addEventListener('click', calcular, false);

function calcular(event) {

    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var n3 = document.getElementById('n3').value;
    var med = document.getElementById('med').value;

    var v1 = 5;
    var v2 = 3;
    var v3 = 2;

    if (med == "A") {
        text.textContent = `A Media Aritimetica é: ${(n1+n2+n3)/3}`;
        event.preventDefault();
        return
    }
    else if (med == "P") {
        text.textContent = `A Media Ponderada é: ${((n1*v1)+(n2*v2)+(n3*v3))/(v1+v2+v3)}`;
        event.preventDefault();
        return
    }
    else{
        text.textContent = "Digite Uma Media Valida: A-Aritimetica, P-Ponderada!"
        event.preventDefault();
        return
    }  
}
