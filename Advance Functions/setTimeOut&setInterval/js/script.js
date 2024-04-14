let alarm = () => console.log(`Fajar ka time ho gya! Otho or namaz parho ${new Date()}`);
let timerId= setTimeout(alarm, 10000);
console.log('Alarm Set with Timer ID:' + " " + timerId);
clearTimeout(timerId);

let intervalId =  setInterval(alarm, 2000);
setTimeout(() => clearInterval(intervalId), 5000);