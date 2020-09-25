// Usando o union |


// O unior é como se fosse um ou, então posso atribuir para uma variável, por exemplo, mais de um tipo aceitável

let strOrNum: string | number;

// Nos exemplos abaixo pode ser percebido que se aceita o tipo string e number mas não aceita o tipo boolean
strOrNum = 'Hi';
strOrNum = 2;
strOrNum = true;