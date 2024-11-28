
  
var quizData = [
{
    question: "What is the <title> tag used for?",
    options: ["Styling the page header" , "Defining the page title" , "Adding a footer to the page" , "Navigation bar"],
    answer: 0
},
{
    question: "How is a class selector written in CSS?",
    options: ["classname", ".classname", "#classname", "None of the above"],
    answer: 2
},

  {
    question: "What is the correct syntax for defining a function in JavaScript?",
    options: ["function myFunction[] {}", "function myFunction() {}", "function:myFunction() {}", "myFunction function() {}"],
    answer: 0
  },
  {
    question: "What is the difference between var, let, and const in JavaScript?",
    options: ["Scope", " Reassignment", "Hoisting", "All of the above"],
    answer: 0
  },
  {
    question: "Which HTML tag is used for adding metadata to a webpage?",
    options: ["<header>", "<meta>", "<footer>", "<data>"],
    answer: 1
},
];

var currentQuestionIndex = 0;
var score = 0;

function startQuiz() {
  var name = document.getElementById('studentName').value;
  var rollNumber = document.getElementById('rollNumber').value;

  if (name === "" || rollNumber === "") {
    alert("Please enter both Name and Roll Number!");
    return;
  }

  document.getElementById('registration').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  document.getElementById('displayName').textContent = name;
  document.getElementById('displayRoll').textContent = rollNumber;

  loadQuestion();
}

function loadQuestion() {
  var questionContainer = document.getElementById('question-container');
  questionContainer.innerHTML = ""; 

  if (currentQuestionIndex < quizData.length) {
    var data = quizData[currentQuestionIndex];

    var questionDiv = document.createElement('div');
    questionDiv.className = "question";
    questionDiv.textContent = (currentQuestionIndex + 1) + ". " + data.question;

    var optionsDiv = document.createElement('div');
    optionsDiv.className = "options";

    data.options.forEach(function(option, index) {
      var button = document.createElement('button');
      button.textContent = option;
      button.onclick = function() {
        validateAnswer(index);
      };
      optionsDiv.appendChild(button);
    });

    questionContainer.appendChild(questionDiv);
    questionContainer.appendChild(optionsDiv);
  } else {
    showResult();
  }
}

function validateAnswer(selectedIndex) {
  var buttons = document.querySelectorAll('.options button');
  var correctIndex = quizData[currentQuestionIndex].answer;

  buttons.forEach(function(button, index) {
    if (index === correctIndex) {
      button.classList.add('correct');
    } else if (index === selectedIndex) {
      button.classList.add('wrong');
    }
    button.disabled = true; 
  });

  if (selectedIndex === correctIndex) {
    score++;
  }

  setTimeout(function() {
    currentQuestionIndex++;
    loadQuestion();
  }, 1000); 
}

function showResult() {
  var resultContainer = document.getElementById('result');
  resultContainer.style.display = "block";
  resultContainer.textContent = "You scored " + score + " out of " + quizData.length + "!";
}
