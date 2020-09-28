// Classes

// Uma classe possui atributos e métodos, esse atributos são definidos no contructor
// O método pode receber um parâmetro também
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  showColor(color) {
    console.log(`The rectangle is ${this.height}x${this.width} and ${color}`)
  }
}

//Para instaciar uma classe eu atribui a uma variável 'new NomeClasse' passando os argumentos
const newRectangle = new Rectangle('20cm', '30cm');
console.log(newRectangle.height)
newRectangle.showColor('red');

//Para tipar a classe então é preciso atentar a estas variáveis

//
class Rectangle2 {
  //antes do contructor é tipada as propriedades da classe
  height: string;
  width: string;
  //no constructor é tipado os valores que são passados como argumentos no momento da instaciação
  constructor(height: string, width: string) {
    this.height = height;
    this.width = width;
  }
  // o método é tipado como se fosse uma função
  showColor(color: string): void {
    console.log(`The rectangle is ${this.height}x${this.width} and ${color}`)
  }
}


// As classes podem ser extendidas bem como suas tipagens
class Circle extends Rectangle {
  perimeter: number;
  // as propriedades que estão vindo da classe superior também devem ser tipadas
  constructor(width: string, height: string, perimeter: number) {
    super(width, height);
    this.perimeter = perimeter;
  }

  showColor2(color: string): void {
    console.log(`The circle is x${this.perimeter} and ${color}`)
  }
}

const newCircle = new Circle('20cm', '20cm', 30);

// com o extends é possivel utilizar os métodos da classe que está sendo extendida
newCircle.showColor('red');
