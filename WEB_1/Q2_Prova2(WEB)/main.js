
var text = document.getElementById('text');
var btn = document.querySelector("#bot");
var btn2 = document.querySelector("#bot2");


btn.addEventListener('click', calcular, false);
btn2.addEventListener('click', mudarP, false);

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

function mudarP(event) {

    var r = document.getElementById('r').value;
    var g = document.getElementById('g').value;
    var b = document.getElementById('b').value;
    var f = document.getElementById('font').value;


    if (0<=r<=255, 0<=g<=255, 0<=b<=255, 0<=f<=100) {
        document.body.style.backgroundColor = ` rgb(${r}, ${g}, ${b})`;
        document.body.style.fontSize = ` ${f}%`;
        event.preventDefault();
        return
    }
    else{
        text.textContent = "Digite Um Valores validos!"
        event.preventDefault();
        return
    }

}
