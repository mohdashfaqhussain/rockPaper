let userScore = 0;
let ComputerScore = 0;

const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".results > p");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissor_div = document.querySelector("#s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function convertToWords(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissor";
}
function win(user, computer) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "Comp".fontsize(3).sub();
  userScore++;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = ComputerScore;
  result_p.innerHTML = `${convertToWords(
    user
  )} ${smallUserWord} beats ${convertToWords(
    computer
  )} ${smallCompWord}.You Win🔥`;
  document.getElementById(user).classList.add("green-glow");
  setTimeout(function () {
    document.getElementById(user).classList.remove("green-glow");
  }, 300);
}

function lose(user, computer) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "Comp".fontsize(3).sub();
  ComputerScore++;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = ComputerScore;
  result_p.innerHTML = `${convertToWords(
    user
  )} ${smallUserWord} Loses ${convertToWords(
    computer
  )} ${smallCompWord}.You Lost..💩`;
  document.getElementById(user).classList.add("red-glow");
  setTimeout(function () {
    document.getElementById(user).classList.remove("red-glow");
  }, 300);
}
function draw(user, computer) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "Comp".fontsize(3).sub();

  result_p.innerHTML = `${convertToWords(
    user
  )} ${smallUserWord} Equals ${convertToWords(
    computer
  )} ${smallCompWord}.It's a draw!`;
  document.getElementById(user).classList.add("grey-glow");
  setTimeout(function () {
    document.getElementById(user).classList.remove("grey-glow");
  }, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }

  //   console.log(`🚀🚀🚀 ${userChoice}`);
  //   console.log(`User choice ${userChoice}`);
  //   console.log(`Computer Choice ${computerChoice}`);
}
function main() {
  rock_div.addEventListener("click", function () {
    //   console.log("Hey you clicked on Rock");
    game("r");
  });
  paper_div.addEventListener("click", function () {
    //   console.log("Hey you clicked on paper");
    game("p");
  });
  scissor_div.addEventListener("click", function () {
    //   console.log("Hey you clicked on Scissor");
    game("s");
  });
}
main();
