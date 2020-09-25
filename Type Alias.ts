// o tipe alias é a delcaração do tipo como se fosse em uma variável


// Primeiro faço a declaração do tipo
type StringType = string;

// Em seguida eu declaro esse tipo na variável, por exemplo
let someString: StringType;

// A partir daí apenas os tipos setados na definição serão aceitos.abs

//Esse funciona:
someString = 'Fabiano';
//Esse não funciona:
someString = 2;


// Posso aproveitar do Union também e definir mais de um único tipo aceitável
type StringAndNumberType = string | number;

let someOtherString: StringAndNumberType;

// Esses irão funcionar:
someOtherString = 'Fabiano';
someOtherString = 2;
//Esse nao irá funcionar
someOtherString = false;


//Mas não funciona apenas com tipos, posso definir string específicas também como no caso abaixo
type onlyFewColors = 'yellow' | 'red'

//Se eu criar uma função e passar um argumento com o tipo definifo conforme abeixo, Apenas quando eu invocar a função com os argumentos corretos não indicará erro

function showColor(color: onlyFewColors): void {
  console.log(color)
}

//Esse funciona:
showColor('yellow');
//Esse não funciona:
showColor('blue');

