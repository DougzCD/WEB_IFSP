const formulario = document.querySelector('form');

//Obtém os dados armazenados na sessão
let arrayClientes = JSON.parse(sessionStorage.arrayClientes);

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const nome = formulario.elements.nome.value;
    const endereco = formulario.elements.endereco.value;

    //incrementa o array com um novo cliente
    arrayClientes.push({
        "nome": nome,
        "endereco": endereco
    });

    //armazena todos os valores, incluindo o novo, na sessão
    sessionStorage.arrayClientes = JSON.stringify(arrayClientes);

    formulario.elements.nome.value = '';
    formulario.elements.endereco.value = '';

});