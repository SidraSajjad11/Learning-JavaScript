let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);
function resetScore(scoreStr) {
  score = scoreStr ? JSON.parse(scoreStr) : {
    win : 0,
    tie : 0,
    lost : 0,
};
score.displayScore = function() {
  return `Score:Won:${score.win}, Lost:${score.lost}, Tie: ${score.tie}`;
};

showResult();
}


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
      score.win++;
      return 'User Won';
    } else if (computerMove === 'Bat'){
      score.tie++
      return `It's a tie`;
    } else if (computerMove === 'Stump'){
      score.lost++;
      return 'Computer has won';
    }
  } else if (userMove === 'Ball') {
    if (computerMove === 'Ball') {
      score.tie++
      return `It's a tie`; 
    } else if (computerMove === 'Bat') {
      score.lost++;
      return 'Computer has Won';
    } else if (computerMove === 'Stump') {
      score.win++;
      return 'User Won';
    }
  } else{
    if (computerMove === 'Bat') {
      score.win++;
      return 'User Won';
    } else if (computerMove === 'Ball') {
      score.lost++;
      return 'Computer has Won';
    } else if (computerMove === 'Stump') {
      score.tie++
      return `It's a tie`;
    }
  }
}
// show result
function showResult(userMove, computerMove, result) {
  // console.log(ssore);
  localStorage.setItem('Score', JSON.stringify(score))
  alert(`You have chosen ${userMove}.  Computer choice is ${computerMove} 
  
  ${result}
  
  ${score.displayScore()}`);
}