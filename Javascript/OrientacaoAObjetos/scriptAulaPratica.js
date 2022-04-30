class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    withdraw(valor){
        if(valor > this._saldo){
           return 'Operação Negada';
        }
        return this._saldo -= valor;
    }

    deposit(valor){
        this._saldo += valor;

        return this._saldo;
    }
}

class contaCorrente extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = 'cartaoCredito';
    }

    get cartaoCredito(){
        return this._cartaoCredito; 
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}


class contaPoupanca extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'poupanca';
    }
}

class contaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'universitaria';
    }

    withdraw(valor){
        if (valor > 500){
            return "Operação Negada!"
         } 
         
         this._saldo -= valor;
        
    }
}