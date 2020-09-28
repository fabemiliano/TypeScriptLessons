"use strict";
// Classes Modifiers
// class anotherRectangle { se usar o abstract na frente não é possivel instanciar a classe
class anotherRectangle {
    constructor(height, width, weight) {
        this.height = height;
        this.width = width;
        this.weight = weight;
    }
    // accessor get
    get getHeight() {
        return this.height;
    }
    // accessor set
    set setHeight(height) {
        this.height = height;
    }
    showColor(color) {
        this.width = '50cm'; // A propriedade privada pode ser alterada dentro da classe pelo método
        console.log(`The rectangle is ${this.height}x${this.width} and ${color}`);
    }
}
const instanceOfRectangle = new anotherRectangle('20cm', '30cm', '10kg');
//posso alterar uma propriedade da classe 
instanceOfRectangle.height = '40cm';
//não consigo alterar
instanceOfRectangle.width = '40cm'; //não consigo alterar pois a propriedade width é privada
instanceOfRectangle.weight = '40cm'; //não consigo alterar pois a propriedade weight é readOnly
instanceOfRectangle.getHeight;
//accessor set é atribuido o valor com igual, não é chamado por função
instanceOfRectangle.setHeight = '30cm';
