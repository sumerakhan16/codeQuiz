window.addEventListener('DOMContentLoaded', (event) => {

    var quizContainer= document.querySelector('#quiz');
    var resultsContainer= document.querySelector('#result')
    var submitButton = document.querySelector("#button");
    


var myQuestions = [
{
    question: "How do you link the JavaScript file to the HTML file?",
    answers: {
        a: "use script tag",
        b: "use body tag",
        c: "use paragraph tag"
    },
    correctAnswer: "a"
},

{
    question: "What function is used to capitalise a variable?",
    answers: {
        a: "upperCase();",
        b: "toUpperCase();",
        c: "capitalize.UpperCase();"
    },
    correctAnswer: "b"
},

{
    question: "WHat is used to represent an increase of the value by 1?",
    answers: {
        a: "//",
        b: "++",
        c: "--"
    },
    correctAnswer: "b"
},

{
    question: "What is the correct Modulo?",
    answers: {
        a: "12%8//4",
        b: "63%5//1",
        c: "15%5//1"
    },
    correctAnswer: "a"
},

{
    question: "What is the correct place to insert JavaScript in HTML?",
    answers: {
        a: "the <head> section",
        b: "the <head> or <body> section",
        c: "the <body> section"
    },
    correctAnswer: "c"
},

];


function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question to show up
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to hold the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
       
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
              </label>`
            );
          
    
}

}

    )}
    //making the timer on the quiz to limit the amount of time on the quiz.
    function makeAlert(){ 
    };
    setInterval(makeAlert, 500);
    var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Time's Up!";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
console.log("time");
    
}
    )
