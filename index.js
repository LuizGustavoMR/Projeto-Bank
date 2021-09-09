
import{Cliente} from "./Cliente.js";

import{ContaCorrente} from "./ContaCorrente.js";

//const cliente1 = new Cliente();
//cliente1.nome = "Luiz";
//cliente1.cpf = 99999988888;


//const cliente2 = new Cliente();
//cliente2.nome ="Barbara";
//cliente2.cpf = 11122233344;


const conta1 = new ContaCorrente();
conta1.cliente = new Cliente();
conta1.agencia = 102;
conta1.cliente.nome = "Luiz Gustavo";
conta1.cliente.cpf = 11122233344;
conta1.depositar(500);


//contaCorrenteLuiz.agencia = 1001;
//contaCorrenteLuiz.cliente = cliente1;
//contaCorrenteLuiz.depositar(500);



const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();
conta2.cliente.nome = "Barbara";
conta2.cliente.cpf = 11122233344;
conta2.agencia = 102;

conta1.transferir(100,conta2);

console.log(conta2);
console.log(conta1);

