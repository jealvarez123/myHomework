Functions:

// Parameter vs arugment
// Parameter work as placeholders in the () of the function
// arugments are the items you plug into the placeholder that is outside of the function

// Return will stop the function and return the specific value
//
// console log will display information in console
//

// const checkPalindrome = (name) => {
//   return name == name.split('').reverse().join('');
//
// };
// console.log(checkPalindrome('radar'));
//
// const checkPalindrome = (name) => {
//   return name == name.split('').reverse().join('');
//
// };
// console.log(checkPalindrome('Borscht'));

// var sumDigits = (num) => {
//   return num / 7
// };
// console.log(sumDigits(42));


// function pythagorean(sideA, sideB){
//   return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
// }
//
// console.log(pythagorean(8, 6));


var arrayBan = [1, 2, 3, 4, 5, 6];

var sumArray = (num1, num2) => num1 + num2;

  console.log( arrayBan.reduce(sumArray));
