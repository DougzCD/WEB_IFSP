// cliente.js
class Conta {
    constructor(numero, saldo, tipo) {
      this.numero = numero;
      this.saldo = saldo;
      this.tipo = tipo;
    }
  
    calcularCustoManutencao() {
      if (this.tipo === 'corrente') {
        return this.saldo * 0.01;
      } else if (this.tipo === 'poupanca') {
        return 6;
      } else {
        throw new Error('Tipo de conta inválido!');
      }
    }
  }
  
  class Cliente {
    constructor(cpf, nome, idade, conta) {
      this.cpf = cpf;
      this.nome = nome;
      this.idade = idade;
      this.conta = conta;
    }
  
    apresentarDados() {
      return `
        CPF: ${this.cpf} 
        Nome: ${this.nome} 
        Idade: ${this.idade} 
        Número da Conta: ${this.conta.numero} 
        Saldo: ${this.conta.saldo} 
        Tipo de Conta: ${this.conta.tipo} 
        Custo de Manutenção: ${this.conta.calcularCustoManutencao()} 
      `;
    }
  }
  
  const clientes = [];
  
  const cadastroForm = document.getElementById('cadastroForm');
  const dadosCliente = document.getElementById('dadosCliente');
  
  cadastroForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const cpf = document.getElementById('cpf').value;
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const contaNumero = document.getElementById('contaNumero').value;
    const saldo = parseFloat(document.getElementById('saldo').value);
    const tipoConta = document.getElementById('tipoConta').value;
  
    const conta = new Conta(contaNumero, saldo, tipoConta);
    const cliente = new Cliente(cpf, nome, idade, conta);
    clientes.push(cliente);
  
    dadosCliente.innerHTML = cliente.apresentarDados();
  });
  