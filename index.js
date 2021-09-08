
import{Cliente} from "./Cliente.js";

import{ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Luiz";
cliente1.cpf = 99999988888;


const cliente2 = new Cliente();
cliente2.nome ="Barbara";
cliente2.cpf = 11122233344;


const contaCorrenteLuiz = new ContaCorrente;

contaCorrenteLuiz.agencia = 1001;
contaCorrenteLuiz.cliente = cliente1;
contaCorrenteLuiz.depositar(500);



const conta2 = new ContaCorrente();

conta2.cliente = cliente2;
conta2.agencia = 102;

contaCorrenteLuiz.transferir(100,conta2);

console.log(conta2);
console.log(contaCorrenteLuiz);

