const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What was the name of the Pygmy Puff Ginny bought from Weasleys’ Wizard Wheezes?',
        choice1: 'Hugo',
        choice2: 'Barry',
        choice3: 'Arnold',
        choice4: 'Craig',
        answer: 3,
    },
    {
        question:
            "What is the name of the plant that Harry uses in order to breathe underwater during the Tri-Wizard tournament?",
        choice1: "Alihotsy",
        choice2: "Gillyweed",
        choice3: "Valerian",
        choice4: "None of the above",
        answer: 2,
    },
    {
        question: "Who is Harry's godfather?",
        choice1: "Dumbeldore",
        choice2: "Snape",
        choice3: "Lupin",
        choice4: "Sirius",
        answer: 4,
    },
    {
        question: "What is Voldemort's middle name?",
        choice1: "Marvalo",
        choice2: "Gaunt",
        choice3: "Salazar",
        choice4: "Riddle",
        answer: 1,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/QUIZ WEB APP/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()