const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

let i =0;
while (i < 151) {

    //Criando um elemento <div>
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon'); //Adicionando a class pokemon ao div. Ex.: <div class = 'pokemon'></div>
                                      //A classe pokemon está definida no arquivo app.css

    //Criando um elemento <span>
    const rotulo = document.createElement('span');
    rotulo.innerText = "#"+(i+1); //Colocando o número do pokemon ao no texto do <span> criado.

    //Criando um elemento <img>
    const novaImg = document.createElement('img');
    novaImg.src = baseURL+(i+1)+".png"; //Atribuindo o endereço e o nome do arquivo de imagem no atributo src do <img> criado.

    //Adicionando a imagem e o rótulo ao <div> criado
    pokemon.appendChild(novaImg);
    pokemon.appendChild(rotulo);

    //Adicionando o <div> à página
    document.body.appendChild(pokemon);
    
    i++;
}
