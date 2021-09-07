class Cliente{
nome;
cpf;


}
  
class ContaCorrente{

  agencia;
  saldo;
  sacar(valor){ 

        if(this.saldo >= valor){
        this.saldo -= valor ;

 
      }
    }
}



const cliente1 = new Cliente();
cliente1.nome = "Luiz";
cliente1.cpf = 99999988888;

const contaCorrenteLuiz = new ContaCorrente;

contaCorrenteLuiz.saldo = 0;
contaCorrenteLuiz.agencia = 1001;

console.log(contaCorrenteLuiz.saldo);
contaCorrenteLuiz.saldo = 100;
console.log(contaCorrenteLuiz.saldo);
contaCorrenteLuiz.sacar(50);

console.log(contaCorrenteLuiz.saldo);

console.log(cliente1);