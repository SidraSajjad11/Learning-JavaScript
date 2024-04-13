let sum = function (num1, num2) {
  return num1 + num2;
}
console.log(sum(6,8));
let sum1 = (num1, num2) => {
  return num1 + num2;
};
console.log(sum1(7,8));
let sum2 = (num1, num2) => num1 + num2;
console.log(sum2(9,5));
let square = num => num * num;
console.log(square(14));
console.log(typeof square);