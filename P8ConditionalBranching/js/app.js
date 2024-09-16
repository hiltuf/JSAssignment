let birthYear = 2030;
let currentYear = 2024;
let favoriteNumber = 21;
let ageOfPerson = currentYear - birthYear;

if (ageOfPerson >= 18) {
  console.log("You are an adult");
}

else if (ageOfPerson <= 11) {
  console.log("You are a child");
}

else {
  console.log("You are a teenager");
}

console.log("The greater number is: " + Math.max(favoriteNumber, ageOfPerson));

if (favoriteNumber % 2 === 0) {
  console.log("Your favorite number is an even number.");
}

else {
  console.log("Your favorite number is an odd number.");
}
