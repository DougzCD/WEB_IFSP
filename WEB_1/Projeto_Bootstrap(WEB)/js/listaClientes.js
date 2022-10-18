
//Obtém todos os dados armazenados na sessão
const arrayClientes = JSON.parse(sessionStorage.arrayClientes);

arrayClientes.forEach(function(el){
    const li = document.createElement('li');
    li.innerText = `Nome: ${el.nome}  -  Endereço: ${el.endereco}`;

    const lista = document.querySelector('#lista');
    lista.append(li);
});
