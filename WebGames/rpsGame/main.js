let user_Score = 0;
let computer_Score = 0;
const user_Score_Span = document.getElementById("score-user");
const computer_Score_Span = document.getElementById("score-computer");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const result = document.querySelector(".infoMessage > p");
let Name_Data = document.getElementById("Name_1");
let Email_Data = document.getElementById("Email_1");
const user_label_div = document.getElementById("user-label");

function EnterData() {
  return (user_label_div.innerHTML = Name_Data.value);
}
function computer_Choices() {
  let choice = ["r", "p", "s"];
  let index = Math.floor(Math.random() * 3);
  return choice[index];
}

rock_div.addEventListener("click", function () {
  game("r");
});

paper_div.addEventListener("click", function () {
  game("p");
});
scissors_div.addEventListener("click", function () {
  game("s");
});

function game(UserChoices) {
  var pc = computer_Choices();
  switch (UserChoices + pc) {
    case "pr":
    case "sp":
    case "rs":
      youWin(UserChoices, pc);
      console.log("you Win!");
      break;
    case "rp":
    case "ps":
    case "sr":
      computerWin(UserChoices, pc);
      console.log("you Loss!");
      break;
    case "pp":
    case "ss":
    case "rr":
      console.log("Drawww!");
      Draw(UserChoices, pc);
      break;
  }
}

function youWin(UserChoices, computerChoice) {
  user_Score++;
  user_Score_Span.innerHTML = user_Score;
  result.innerHTML =
    convertToWord(UserChoices) +
    "<sub>You</sub>beats " +
    convertToWord(computerChoice) +
    "<sub>Computer</sub>.You win!";
}
function computerWin(UserChoices, computerChoice) {
  computer_Score++;
  computer_Score_Span.innerHTML = computer_Score;
  result.innerHTML =
    convertToWord(UserChoices) +
    "<sub>You</sub>beats " +
    convertToWord(computerChoice) +
    "<sub>Computer</sub>.You Loss!";
}

function Draw(UserChoices, computerChoice) {
  result.innerHTML =
    convertToWord(UserChoices) +
    "<sub>You</sub>beats " +
    convertToWord(computerChoice) +
    "<sub>Computer</sub>.Draw!";
}
function convertToWord(char) {
  if (char === "p") return "Paper";
  if (char === "r") return "Rock";
  if (char === "s") return "Scissors";
}
