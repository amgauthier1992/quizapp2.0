const QUIZ = {

questions: [
        {
        question: 'What is the capital city of Massachusetts?',
          answers: [
            'Worcester',
            'Cambridge',
            'Boston',
            'Plymouth'
          ],
          correctAnswer: 'Boston'
        },
        {
          question: 'What is the capital city of California?',
          answers: [
            'Sacramento',
            'Los Angeles',
            'San Diego',
            'San Francisco'
          ],
          correctAnswer: 'Sacramento'
        },
        {
          question: 'What is the capital city of Maine?',
          answers: [
            'Waterville',
            'Augusta',
            'Bangor',
            'Portland'
          ],
          correctAnswer: 'Augusta'
        },
        {
          question: 'What is the capital city of South Dakota?',
          answers: [
            'Deadwood',
            'Sioux Falls',
            'Pierre',
            'Aberdeen'
          ],
          correctAnswer: 'Pierre'
        },
        {
          question: 'What is the capital city of Iowa?',
          answers: [
            'Iowa City',
            'Cedar Rapids',
            'Davenport',
            'Des Moines'
          ],
          correctAnswer: 'Des Moines'
        }
    ],

    quizStarted: false,
    questionNumber: 0,
    score: 0,
    hasAnswered: 0,
    isCorrect: true
};

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

//This function will generate the HTML for the start page of the Quiz
function generateStartPage(){
  return `
    <h2>Think you're an expert when it comes to U.S. capital city trivia? Take the quiz and see if you're right!</h2>
    <button type="button" class="start-button js-start-button">Start the Quiz</button>
  `;
}

//This function will generate the question pages of the Quiz
function generateQuestionPage(){
  return `
    <div class="question-number js-question-number">Question ${QUIZ.questionNumber} out of 5</div>
    <form class="quiz-form js-quiz-form">
      <legend class="question js-question">What is the capital city of X?</legend>
        <input name="cityAnswer" type="radio" value="Boston" tabindex="1" required> 
        <label for="answer1">Boston</label><br>
        <input name="cityAnswer" type="radio" value="Sacramento" tabindex="2" required>
        <label for="answer2">Sacramento</label><br>
        <input name="cityAnswer" type="radio" value="Albany" tabindex="3" required> 
        <label for="answer3">Albany</label><br>
        <input name="cityAnswer" type="radio" value="Honolulu" tabindex="4" required> 
        <label for="answer4">Honolulu</label><br>
        <button type="button" class="submit-button js-submit-button">Submit</button>
    </form>
    <div class="score-tracker js-score-tracker">Score ${QUIZ.score} out of 5</div>
  `;
}

//This function will generate the answer pages of the Quiz
function generateAnswerPage(){
  return `
    <h2>Correct/Incorrect!</h2>
    <h3>The capital city is X</h3>
    <div class="score-tracker js-score-tracker">Score X out of 5</div>
    <button type="button" class="next-button js-next-button">Next Question</button>
  `;
}

//This function will generate the completion page once the user has finished the Quiz
function generateCompletionPage(){
  return `
    <h2>Congratulations! You have finished the quiz!</h2>
    <h3>Your final score is:</h3>
    <div class="score-tracker js-score-tracker">Score X out of 5</div>
    <button type="button" class="restart-button js-restart-button">Restart Quiz</button>
  `;
}

/********** RENDER FUNCTION **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the Quiz. It bundles together
// all of our template generation functions within if/if-else/else statement logic to render select HTML templates.

function renderQuizApp(){
  console.log(`renderQuizApp ran`);

  //if the quiz has not been started yet- generate the start page
  if (QUIZ.quizStarted === false){
    $('main').html(generateStartPage);
  }
  //if the user has started the quiz, but the current question number is < than the total number of questions- generate the question page
  //Think: How do we know when it's time to render the last page and what property can we use to measure the total amount of questions?
  //questions is an array so we would use the length property. Once we reach the last index (question), is when we would generate the results
  //page. By creating this logic for the start page, question page, and answer page, we only need to use an else statement for our last page.
  else if (QUIZ.quizStarted === true && QUIZ.questionNumber < QUIZ.questions.length){
    $('main').html(generateQuestionPage);
  }
  //if the number of questions answered has exceeded the current question number- generate the answer page.
  else if (QUIZ.hasAnswered > QUIZ.questionNumber){
    $('main').html(generateAnswerPage);
  }
  //if none of the above conditions are met, generate the results page
  else {
    $('main').html(generateCompletionPage);
  }
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
// When the user submits their answer,
// When we need to check what answer they picked,
// When we need to tell them if they're correct

//When the start button is clicked, perform a callback function which sets the quizStarted property = true, and renders the quizApp.
function handleQuizStarted() {
  $('.js-start-button').on('click', function(event){
    console.log(`handleQuizStarted ran`);
    QUIZ.quizStarted = true;
    renderQuizApp();
  });
}

//When the user interacts with the submit button, perform a callback function which , and renders the quizApp.
function handleQuestionSubmit() {
  //use event delegation first to target the main (parent element) rather than the class of the button or the form itself because all of these elements were not present on the 
  //initial page load. 
  $('main').on('submit', '.js-quiz-form', function(event){
    console.log(`handleQuestionSubmit ran`);
    event.preventDefault();

  });
};

function handleNextQuestion() {
  console.log(`handleNextQuestion ran`)

};

//When the user interacts with the restart Quiz button, perform a callback function which resets the values for quizStarted to false,
//question number, score, and the number of questions answered to 0, and renders the quizApp.
function handleRestartQuiz() {
  $('.js-restart-button').on('click', function(event){
    console.log(`handleRestartQuiz ran`)
    QUIZ.quizStarted = false;
    QUIZ.questionNumber = 0;
    QUIZ.score = 0;
    QUIZ.hasAnswered = 0;
    renderQuizApp();
  });
};

//********* Master **********//

// this function will be our callback when the page loads. it's responsible for
// initially rendering the Quiz App, and activating our event handler functions
// for initializing the quiz, verify the user's answer choice 
// and user interaction with the "submit answer", "next question" and "quiz restart" buttons.

function handleQuizApp() {
  renderQuizApp();
  handleQuizStarted();
  handleQuestionSubmit();
  handleNextQuestion();
  handleRestartQuiz();
}

// when the page loads, call handleQuizApp 
$(handleQuizApp);



