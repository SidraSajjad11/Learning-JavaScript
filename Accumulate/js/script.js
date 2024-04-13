let nums = [1,2,3,4,5,6,7,8,9,0];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
  console.log('Sum of the array is: ' + sum);
  let squares =[];
  for (let i = 0; i <= nums.length - 1; i++) {
    squares.push(nums[i] * nums[i]);
  }
  console.log(squares);