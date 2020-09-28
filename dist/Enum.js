"use strict";
// ENUM
// O enum basicamente cria uma numeração para os items passados, o white será 0 e o black será 1
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["black"] = "#000";
})(Color || (Color = {}));
const color = Color.white;
// retornará o
console.log(color);
console.log(Color.white);
