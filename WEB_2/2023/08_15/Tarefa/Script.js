  class Funcionario {
    constructor(cpf, nome, nasc) {
      this.cpf = cpf;
      this.nome = nome;
      this.nasc = nasc;
    }
    
    apresentarDados() {
      return `
        CPF: ${this.cpf} 
        Nome: ${this.nome} 
        Nasc: ${this.Nasce} 
        } 
      `;
    }
  }
  
  const funcionarios = require('./resources/funcionarios.json');
  
  const cadastroForm = document.getElementById('cadastroForm');
  const dadosFuncionario = document.getElementById('dadosFuncionario');
  
  cadastroForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const cpf = document.getElementById('cpf').value;
    const nome = document.getElementById('nome').value;
    const nasc = document.getElementById('nasc').value;
  
    const funcionario = new Funcionario(cpf, nome, nasc);
    funcionarios.push(funcionario);
  
    dadosFuncionario.innerHTML = funcionario.apresentarDados();
  });
  