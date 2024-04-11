// Computer Choice
function generateComputerChoice() {
  let randomNumber = Math.random() * 3;
  if(randomNumber > 0 && randomNumber <= 1){
    return 'Bat';
  } else if (randomNumber > 1 && randomNumber < 2) {
    return 'Ball';
  } else{
    return 'Stump';
  }
  return choice;
}
// User choices
function getResult(userMove, computerMove) {
  if (userMove === 'Bat' ) {
    if (computerMove === 'Ball'){
      return 'User Won';
    } else if (computerMove === 'Bat'){
      return `It's a tie`;
    } else if (computerMove === 'Stump'){
      return 'Computer has won';
    }
  } else if (userMove === 'Ball') {
    if (computerMove === 'Ball') {
      return `It's a tie`; 
    } else if (computerMove === 'Bat') {
      return 'Computer has Won';
    } else if (computerMove === 'Stump') {
      return 'User Won';
    }
  } else{
    if (computerMove === 'Bat') {
      return 'User Won';
    } else if (computerMove === 'Ball') {
      return 'Computer has Won';
    } else if (computerMove === 'Stump') {
      return `It's a tie`;
    }
  }
}
// show result
function showResult(userMove, computerMove, result) {
  alert(`You have chosen ${userMove}.  Computer choice is ${computerMove} and ${result}`);
}