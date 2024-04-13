// Create an array of numbers [5,6]. Add 4 at the beginning and 7 at the end of the array
let arr = [5,6];
console.log(arr);
let push = arr.push(7);
console.log(arr);
let unshift = arr.unshift(4);
console.log(arr);
// Create a method to return an element at a particular  Position in the array.
function getElement(arr, Position) {
  return arr [Position - 1];
}
 let arra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 console.log(getElement(arra,9));
//  Create an array using slice method
function arrCopy(arr) {
  return arr.slice(0, arr.length)
}
let array = [4,5,6,7];
let array2 = arrCopy(arr);
array2 [0] = null;
console.log(array);
console.log(array2);
// Create a while loop that exist after continuing 5 prime numbbers
// Modify the above loop to finish using break
function isPrime(num) {
  for (let i = 2; i < num; i++){
      if (num % i === 0) {
        return false;
      } 
  }
  return true;
}
let num = 2;
let i = 0;
while (true) {
  if (isPrime(num)) {
    console.log(num);
    i++;
    if (i >= 5) {
      break;
    }
  }
  num++;
}
// Create a for loop that prints numbers 1 to 10 in reverse order

for (let i = 10; i > 0; i--) {
  console.log(i);  
}
for (let i = 0; i < 10; i++) {
  console.log(10 - i);  
}
// Using Continue only print positive numbers from the given array [1, -6, 5, 7, -98]
let numss = [1, -6, 5, 7, -98];
for (let i = 0; i < numss.length; i++) {
  if (numss[i] < 0) continue;
  console.log(numss[i]);
}
// Using Accumulator pattern concatenate all the in the given array [KG, Coding, JavaScript is Best]
let array3 = ['KG ', 'Coding ', 'JavaScript ', 'is ', 'Best'];
let result = '';
for (let i = 0; i < array3.length; i++) {
  result += array3[i];
}
console.log(result);