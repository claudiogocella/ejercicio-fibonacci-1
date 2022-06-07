/*function calcularFactorialSec(n:number):number{
  let resultado:number = 1;
  let indice:number = 1;
  for(indice = 2; indice <= n; indice++) {
  resultado = resultado * indice;
  }
  return resultado;*/ 

  function calcularFibonacciSec(n:number):number {
    let resultado:number = 0;
    let indice:number, aux1:number, aux2:number;
    aux1 = 1;
    for (indice=1; indice <=n; indice++) {
    aux2=resultado;
    resultado=aux1;
    aux1=aux2+aux1;
    };
    return resultado;
    }
  