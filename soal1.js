const formula = require('./formula.js');

let squareSides = 2;

let rectangleLength = 2;
let rectangleWidth = 3;

console.log(`Keliling persegi: ${formula.squareArea(squareSides)}`);
console.log(`Luas persegi: ${formula.squarePerimeter(squareSides)}`);

console.log(`Keliling persegi panjang: ${formula.rectangleArea(rectangleLength, rectangleWidth)}`);
console.log(`Luas persegi panjang: ${formula.rectanglePerimeter(rectangleLength, rectangleWidth)}`);