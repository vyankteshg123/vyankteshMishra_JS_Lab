// Quiz
//     questions
//     score
//     questionIndex

// isEnded
// getQuestionByIndex
// checkOptionWithAnswer

// Question
//     questionText
//     answer
//     choices

// isCorrectAnswer

function Quiz(questions){
    this.questions = questions;
    this.score = 0
    this.questionIndex = 0;
}

Quiz.prototype.isEnded = function(){
    return this.questionIndex === this.questions.length;
}

Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkOptionWithAnswer = function(userAnswer){
    if(this.getQuestionByIndex().isCorrectAnswer(userAnswer)){
        this.score++;
    }
    this.questionIndex++;
}

 function Question(questionText,choices,answer){
    this.questionText=questionText;
    this.choices=choices;
    this.answer=answer;
}

Question.prototype.isCorrectAnswer = function(userAnswer){
    return this.answer===userAnswer;
}

// function loadQuestions(){
//     ...if quiz.isEnded... 
//             showScores()
//     else
//         ...
//         //where to put the question
//             question = quiz.getQuestionByIndex()
//             document.getElementId("question").innerText= question.questionText;
        
//             questionChoices= question.choices;
//             for each of the questionChoice
//                  document.getElementId("choice"+i).innerText= questionChoices[i];
//                  handleOptionButton("btn"+i,questionChoices[i])
//             showProgress()
// }

function loadQuestions() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        let question = quiz.getQuestionByIndex();
        var element = document.getElementById("question");
        element.innerHTML = question.questionText;
  
        // show options
        var choices = question.choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            handleOptionButton("btn" + i, choices[i]);
        }
  
        showProgress();
    }
}
  
function handleOptionButton(id, choice) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.checkOptionWithAnswer(choice);
        loadQuestions();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores(){
    let quizOverHTML = "<h1>Result</h1>";
    quizOverHTML+= "<h2> Your score: " + quiz.score + ". & mark percentage is: " + (quiz.score*100/quiz.questions.length) +"% </h2>";
    document.getElementById("quiz").innerHTML = quizOverHTML;
}   


let questions = [
    new Question("JavaScript supports", ["Functions", "XHTML","CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
  ];

let quiz = new Quiz(questions);

loadQuestions();

// question1 = new Question("who is father of computer",["1","2"],"1")
// question1.isCorrectAnswer("2");