let number = {
  even : 0,
  odd : 0,
  calEv: function calcEven(number) {
    let remainder = number % 2;
    let isEven = remainder == 0;
    return isEven;
  },
  calOd: function CalcOdd(number) {
    let remainder = number % 2;
    let isOdd = remainder == 1;
    return isOdd;
  }
};
console.log(number.calEv);
console.log(number.calOd);