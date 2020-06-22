const QUIZ = [

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