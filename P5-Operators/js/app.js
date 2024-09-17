let kmh = 72;
let ms = kmh / 3.6;

console.log('M/S: ' + ms);

let minutes = 3;
let seconds = minutes * 60;
console.log('Seconds: ' + seconds);

let firstNumber = 11;
let secondNumber = 4;
let division = firstNumber / secondNumber;
console.log('Division: ' + division);

let moduloFirst = 11;
let moduloSecond = 4;
let modulo = moduloFirst % moduloSecond;
console.log('Modulo: ' + modulo);

let radius = 2;
let areaCalc = radius * radius * Math.PI;
console.log('Area: ' + areaCalc);

let input = 11;
let negation = -input;
console.log('Negation: ' + negation);

let weight = 70;
let height = 1.82;
let heightCalc = height * height;
let BMI = weight / heightCalc;
console.log('BMI: ' + BMI);

let firstKatet = 3;
let secondKatet = 4;
function calcHypotenuse(firstKatet, secondKatet) {
  return Math.sqrt(firstKatet * firstKatet + secondKatet * secondKatet);
}
console.log('Hypotenuse: ' + calcHypotenuse(firstKatet, secondKatet));

let totalSeconds = 111;
let floorMinutes = Math.floor(totalSeconds / 60);
let lastSeconds = totalSeconds % 60;
console.log(floorMinutes + ' minute(s) ' + lastSeconds + ' seconds(s)');
