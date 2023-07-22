const formula = require('./formula.js');

let squareSides = 2;

let rectangleLength = 2;
let rectangleWidth = 3;

console.log(formula.squareArea(squareSides));
console.log(formula.squarePerimeter(squareSides));

console.log(formula.rectangleArea(rectangleLength, rectangleWidth));
console.log(formula.rectanglePerimeter(rectangleLength, rectangleWidth));