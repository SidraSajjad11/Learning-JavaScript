let clickMeElement = document.querySelector('#my-button');
let behavior = event => console.log("Hello")
clickMeElement.addEventListener('click', behavior);
let printDate = event => console.log(new Date());
clickMeElement.addEventListener('click', printDate);
clickMeElement.removeEventListener('click', behavior);