let questions = [
  new Question(
    "How many people are there on an English jury?",
    ["6", "12", "13", "15"],
    "12"
  ),
  new Question(
    "What year did World War II end?",
    ["1937", "1945", "1875", "1776"],
  "1945"
  ),
  new Question(
    "What is the currency of the UK?",
    [
      "Pound",
      "Euro",
      "Riyal",
      "USD"
    ],
    "Pound"
  ),
  new Question(
    "How many days are in a leap year?",
    ["364", "365", "366", "367"],
    "366"
  ),
  new Question(
    "Which two colors mix to form pink?",
    ["Grey and red", "white and orange", "White and Red", "Green and Red"],
    "White and Red"
  ),
];

let quiz = new Quiz(questions);

function showScores() {
  let gameOverHtml = "<h1> Result </h1>";
  gameOverHtml += `<h2 id = "score"> Your scores is ${quiz.score} </h2>`;
  
  let element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;

  let button = document.createElement("button");
  button.innerHTML = "play again";

  button.onclick = function(){
    window.location.reload();
  };
  element.appendChild(button);
}

function showProgress() {
let currentQuestionNumber = quiz.questionsIndex + 1;
let element = document.getElementById("progress");

element.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;


}

function guess(id, guess) {
  let button = document.getElementById(id);

  button.onclick = () => {
    quiz.guess(guess);
    populate();
  };
}

function populate() {
  if(quiz.isEnded()){
    showScores();
  }else{
  let element = document.getElementById('question');

  element.innerHTML = quiz.getQuestionIndex().text;

  let choices = quiz.getQuestionIndex().choices;

  for(let i = 0; i < choices.length; i++){
    let element = document.getElementById(`choice${i}`);
    element.innerHTML = choices[i];
    guess(`btn${i}`, choices[i]);
  }
  showProgress();
}
}
populate();
