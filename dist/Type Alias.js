"use strict";
// o tipe alias é a delcaração do tipo como se fosse em uma variável
// Em seguida eu declaro esse tipo na variável, por exemplo
let someString;
// A partir daí apenas os tipos setados na definição serão aceitos.abs
//Esse funciona:
someString = 'Fabiano';
//Esse não funciona:
someString = 2;
let someOtherString;
// Esses irão funcionar:
someOtherString = 'Fabiano';
someOtherString = 2;
//Esse nao irá funcionar
someOtherString = false;
//Se eu criar uma função e passar um argumento com o tipo definifo conforme abeixo, Apenas quando eu invocar a função com os argumentos corretos não indicará erro
function showColor(color) {
    console.log(color);
}
//Esse funciona:
showColor('yellow');
//Esse não funciona:
showColor('blue');
