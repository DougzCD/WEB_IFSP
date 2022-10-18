
let formulario = document.querySelector('form');

//Obtém os dados armazenados na sessão
var clientes = [];

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    let cliente = new Cliente()

    let cpf = formulario.elements.cpf.value;
    let name = formulario.elements.name.value;
    let nasc = formulario.elements.nasc.value;
    let c = formulario.elements.contac.checked;
    let p = formulario.elements.contap.checked;

    cliente.setcpf(cpf)
    cliente.setname(name)
    cliente.setnasc(nasc)
    cliente.setConta(c, p)

    console.log(cliente)

    clientes.push(cliente)

    //sessionStorage = JSON.stringify(clientes);

    sessionStorage.setItem('cliente'+(sessionStorage.length+1), JSON.stringify(clientes))

    console.log(sessionStorage)
    console.log(cliente)
    console.log(clientes)

    //armazena todos os valores, incluindo o novo, na sessão
    //sessionStorage = JSON.stringify(clientes);

    clientes = JSON.parse(sessionStorage);

    clientes.forEach(function(){
        const li = document.createElement('li');

        li.innerText = `
        Nome: ${cliente.getname}
        CPF: ${cliente.getcpf}
        idade: ${cliente.getnasc}
        Conta: ${cliente.getconta}
        `;
    
        const lista = document.querySelector('#lista');
        lista.append(li);
    });
    

});


// Classe do cliente
class Cliente {
    constructor() {

        this.cpf = '';

        this.name = '';

        this.nasc = '';

        this.conta = [];

    }
    
    setcpf(cpf){
        this.cpf = cpf;
    }
    getcpf(){
        return this.cpf;
    }

    setname(name){
        this.name = name;
    }
    getname(){
        return this.name;
    }

    setnasc(nasc){
        this.nasc = nasc;
    }
    getnasc(){
        return this.nasc;
    }
    
    setConta(c, p){

        switch (c, p) {
            case c == true & p == false:

                let conta = new Corrente()

                let numberc = this.cpf+'c';
                let saldoc = formulario.elements.saldo.value;
                let costc = saldop * 0.01;

                this.conta.setnumber(numberc)
                this.conta.setsaldo(saldoc)
                this.conta.setcost(costc)

                console.log(conta)
    
                break;

            case p == true & c == false:
                
                this.conta = new Poupanca()

                let numberp = this.cpf+'c';
                let saldop = formulario.elements.saldo.value;
                let costp = saldop * 0.01;

                this.conta.setnumber(numberp)
                this.conta.setsaldo(saldop)
                this.conta.setcost(costp)

                console.log(conta)

                break;
           
            default:

                this.conta = 'Esse cliente não possui uma conta';

                break;
        }
    }

    getconta(){
        return this.conta;
    }

}

// Classe da Conta pai só usada como base
class Conta {
    constructor(number, saldo, cost) {

        this.number = '';

        this.saldo = '';

        this.cost = '';

    }

    setnumber(number){
        this.number = number;
    }
    getnumber(){
        return this.number;
    }

    setsaldo(saldo){
        this.saldo = saldo;
    }
    getsaldo(){
        return this.saldo;
    }

    setcost(cost){
        this.cost = cost;
    }
    getcost(){
        return this.cost;
    }
}

class Corrente extends Conta{}

class Poupanca extends Conta{}



