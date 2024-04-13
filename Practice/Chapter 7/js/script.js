function doGreeting(name = 'Dear') {
  let date = new Date();
  let hours = date.getHours();
  let heading = document.querySelector('#greeting');
    if (hours >= 5 && hours <= 12) {
      heading.innerText = `Good Morning ${name}`;
    } else if (hours > 12 && hours < 18) {
      heading.innerText = `Good Afternoon ${name}`;
    } else {
      heading.innerText = `Good Night ${name}`;
    }
}
doGreeting('Zeeshan');

let noOfTimesClicked = localStorage.getItem('noOfTimesClicked') || 0;
function buttonPressed() {
  noOfTimesClicked++;
  localStorage.setItem('noOfTimesClicked', noOfTimesClicked)
  updateButton();
}

function updateButton() {
  let button = document.querySelector('#my-button');
  if (noOfTimesClicked % 2 === 0) {
    button.classList.remove('js-odd');
    button.classList.add('js-even');
  } else {
    button.classList.remove('js-even');
    button.classList.add('js-odd');
  }
  button.innerText = noOfTimesClicked;
}

updateButton();
