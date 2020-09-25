// Para tipar uma função é preciso tipar os argumentos e o retorno

const returnSomething = (x: number): number => {
  return x * 2;
}

// A função abaixo está correta
console.log(returnSomething(2));
// A função abaixo está incorreta pois estou passando uma string como argumento sendo que a função requer um number
console.log(returnSomething('Fabiano'));

// Caso a função não tenha retorno é passado o tipo 'void'
const doNotReturn = (x: number): void => {
  console.log(x)
}

// Caso a função não tenha retorno é for passado um tipo de retorno será acusado erro
const doNotReturnANumber = (x: number):number => {
  console.log(x)
}



