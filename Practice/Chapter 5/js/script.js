// Odd Method
function calcOdd(number) {
  let remainder = number % 2;
  let isOdd = remainder == 1;
  return isOdd
}
// console.log(calcOdd(5));
// Even Method
function calcEven(number) {
  let remainder = number % 2;
  let isEven = remainder == 0;
  return isEven; 
}
// console.log(calcEven(4));
// Find Larger Number
function findLarger(num1, num2) {
  // if (num1 > num2) {
  //   return num1;
  // } else if (num1 < num2){
  //   return num2;
  // }
  return num1 > num2 ? num1 : num2;
}
alert(findLarger(411,119));
function toFahrenheit(celsiusValue) {
  return 9 / 5 * celsiusValue + 32;
}
console.log(toFahrenheit(100));