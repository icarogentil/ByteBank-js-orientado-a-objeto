import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1 = new Cliente("Icaro", 14874948740);

const cliente2 = new Cliente("Cristiane", 81744676534);

const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(500);

const conta2 = new ContaCorrente(cliente2, 1002);
conta1.transferrir(200, conta2);
