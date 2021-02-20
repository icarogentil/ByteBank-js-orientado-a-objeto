import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static QtdDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;

    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }

    get cliente() {
        return this._cliente
    }

    get saldo() {
        return this._saldo
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferrir(valor, conta) {
        if (this._saldo >= valor) {
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
        }
    }

    constructor(cliente, agencia) {
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.QtdDeContas += 1;
    }
}