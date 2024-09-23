const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyper Text Making Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Type Machine Language",
    ],
    correct: 0,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System",
      "Cascading System Sheets",
    ],
    correct: 0,
  },
  {
    question:
      "What is the correct syntax for linking an external JavaScript file?",
    options: [
      '<script src="script.js"></script>',
      '<script href="script.js"></script>',
      '<js link="script.js"></js>',
      '<script link="script.js"></script>',
    ],
    correct: 0,
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<script>", "<style>", "<css>", "<head>"],
    correct: 1,
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: ["Boolean", "String", "Number", "Float"],
    correct: 3,
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Mozilla", "Netscape", "Microsoft", "Sun Microsystems"],
    correct: 1,
  },
];

let currentQuiz = 0;
let score = 0;

const questionElement = document.getElementById("question");
const option_1 = document.getElementById("option_1");
const option_2 = document.getElementById("option_2");
const option_3 = document.getElementById("option_3");
const option_4 = document.getElementById("option_4");
const submitBtn = document.getElementById("submit");
const answers = document.querySelectorAll(".answer");
const resultElement = document.getElementById("result");
const scoreText = document.getElementById("scoreText");
const restartBtn = document.getElementById("restart");

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  option_1.innerText = currentQuizData.options[0];
  option_2.innerText = currentQuizData.options[1];
  option_3.innerText = currentQuizData.options[2];
  option_4.innerText = currentQuizData.options[3];
}

function deselectAnswers() {
  answers.forEach((answer) => (answer.checked = false));
}

function getSelected() {
  let answer;
  answers.forEach((answerEl, index) => {
    if (answerEl.checked) {
      answer = index;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const selectedAnswer = getSelected();
  if (selectedAnswer !== undefined) {
    if (selectedAnswer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      showResult();
    }
  } else {
    alert("Please select an answer!");
  }
});

function showResult() {
  questionElement.style.display = "none";
  document.querySelector("ul").style.display = "none";
  submitBtn.style.display = "none";

  scoreText.innerText = `You scored ${score} out of ${quizData.length}!`;
  resultElement.style.display = "block";
}

restartBtn.addEventListener("click", () => {
  currentQuiz = 0;
  score = 0;
  resultElement.style.display = "none";
  questionElement.style.display = "block";
  document.querySelector("ul").style.display = "block";
  submitBtn.style.display = "block";
  loadQuiz();
});
