let multiply = (num1, num2) => num1 * num2;
let multplies = multiply(2,8);
console.log(multplies);

// Create a function runTwice that takes a function as a parameter and then runs method twice
let sum = (num1, num2) => num1 + num2;
let sumThreeNum = (num1, num2, num3, sumTwoNum) => {
  let sum1 = sumTwoNum(num1, num2);
  return sumTwoNum(sum1, num3);
}

console.log(sumThreeNum(1, 4, 88, sum));
// Create a button which should grow double in size on clicking after 2 seconds
function doubleTheSize() {
  let buttonElement = document.querySelector('.btn-subscribe');
  buttonElement.classList.add('js-size-double');
}
// In above exercise add the behavior using an event listener instead of onclick
let buttonElement = document.querySelector('.btn-subscribe');
buttonElement.addEventListener('click', event => setTimeout(doubleTheSize, 2000))
// Create a function  that sums an array of numbers. Do this using a forEach loop.
let arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum1 = 0
 arr.forEach(num => sum1 += num);
console.log(sum1);
// Create a function that takes an array of numbers and return their squares using map function
let squares = arr.map(num => num*num);
console.log(squares);