let userScore = 0;
let aiScore = 0;
const userScore_span = document.getElementById("user-score");
const aiScore_span = document.getElementById("ai-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const userWord = "You".fontsize(3).sub();
const aiWord = "AI".fontsize(3).sub();

function getAIChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") {
    return "Rock";
  } else if (letter === "p") {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function win(userChoice, aiChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(userChoice)}
    ${userWord} beats 
    ${convertToWord(aiChoice)}
    ${aiWord}. You win!!!`;
}

function lose(userChoice, aiChoice) {
  aiScore++;
  aiScore_span.innerHTML = aiScore;
  result_p.innerHTML = `${convertToWord(userChoice)}
    ${userWord} loses 
    ${convertToWord(aiChoice)}
    ${aiWord}. You lost...`;
}

function draw(userChoice, aiChoice) {
  result_p.innerHTML = `${convertToWord(userChoice)}
    ${userWord} equals 
    ${convertToWord(aiChoice)}
    ${aiWord}. It's a draw.`;
}

function game(userChoice) {
  const aiChoice = getAIChoice();
  if (
    userChoice + aiChoice === "rs" ||
    userChoice + aiChoice === "pr" ||
    userChoice + aiChoice === "sp"
  ) {
    win(userChoice, aiChoice);
  } else if (
    userChoice + aiChoice === "rp" ||
    userChoice + aiChoice === "sr" ||
    userChoice + aiChoice === "ps"
  ) {
    lose(userChoice, aiChoice);
  } else {
    draw(userChoice, aiChoice);
  }
}

rock_div.addEventListener("click", function() {
  game("r");
});

paper_div.addEventListener("click", function() {
  game("p");
});

scissors_div.addEventListener("click", function() {
  game("s");
});

main();
