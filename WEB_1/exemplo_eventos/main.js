function drag_start(event) {

    text.classList.remove("visible");
    text.classList.add("hidden");

    console.dir(event);
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
} 

function drag_over(event) { 
    

    console.dir(event);
    console.log(`
    Screen X/Y: ${event.screenX}, ${event.screenY}
    Client X/Y: ${event.clientX}, ${event.clientY}
    Page X/Y: ${event.pageX}, ${event.pageY}
    `);
    screenLog.textContent = `
    Screen X/Y: ${event.screenX}, ${event.screenY}
    Client X/Y: ${event.clientX}, ${event.clientY}
    Page X/Y: ${event.pageX}, ${event.pageY}
    `;
    event.preventDefault(); 
    return false; 
} 

function drop(event) {
    
    text.classList.remove("hidden");
    text.classList.add("visible");

    var offset = event.dataTransfer.getData("text/plain").split(',');
    var text = document.getElementById('text');
    text.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    text.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;
} 

function venda(event) {
    
    console.dir(e);

    switch (e.textContent) {
        case "MG":

            text.textContent = v*1,07;

            break;
        
        case "SP":

            text.textContent = v*1,12;

            break;
    
        case "RJ":

            text.textContent = v*1,15;

            break;
    
        case "MS":

            text.textContent = v*1,08;

            break;
    
        default:
            break;
    }
    event.preventDefault();
    return false;
}

/*function escrever(event) {

    //console.dir(event);
    text.textContent += ` ${event.key}`;

}

function apagar(event) {

    if (event.code == "Backspace") {
        text.textContent = text.textContent.slice(0, -1);
    }
    else{
        return
    }
}*/

var text = document.getElementById('text');
let screenLog = document.querySelector('#screenlog');

let v = document.querySelector("#valor");
let e = document.querySelector("#estado");

let btn = document.querySelector("#bot");

/*document.addEventListener('keypress', escrever);
document.addEventListener('keydown', apagar);
*/
btn.addEventListener('mouseup',venda,false)
text.addEventListener('dragstart', drag_start,false); 
document.body.addEventListener('dragover',drag_over,false);
document.body.addEventListener('drop',drop,false); 
 