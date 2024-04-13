let sum = function(num1, num2){
  return num1 + num2;
}
// let newSum = sum;
// console.log(sum(4, 5));
// console.log(newSum(4, 5));
let sumThreeNumbers = function(num1, num2, num3, sumTwoNumbers) {
  let sum1 = sumTwoNumbers(num1, num2);
  return sumTwoNumbers(sum1,  num3);
}
console.log(sumThreeNumbers(4,10,6, sum));
console.log(sumThreeNumbers);
console.log(typeof sumThreeNumbers);