function multiplier(numberMultiply) {
  return numberMultiply * numberMultiply;
}
console.log(multiplier(4));

function average(number1, number2) {
  return (number1 + number2) / 2;
}

console.log(average(2, 6));

function welcome(firstname, lastName) {
  return `${firstname} ${lastName}`;
}

console.log('Welcome ' + welcome('Ben', 'Ting') + '!')

function random() {
  return Math.floor(Math.random() * 3);
}

console.log(random());

function convertNumbers(number) {
  if (number === 0) {
    return 'A';
  }
  else if (number === 1) {
    return 'B';
  }
  else if (number === 2) {
    return 'C';
  }
}

console.log(convertNumbers(0));
console.log(convertNumbers(1));
console.log(convertNumbers(2));

function  evaluteResult(firstNumber, secondNumber) {
  if (firstNumber === secondNumber) {
    return 'Both numbers are equal!'
  }
  else if (firstNumber >= secondNumber) {
    return 'First number is greater!'
  }
  else if (firstNumber <= secondNumber) {
    return 'Second number is greater!'
  }
}

console.log(evaluteResult(5,5));
console.log(evaluteResult(10,2));
console.log(evaluteResult(5,10));

