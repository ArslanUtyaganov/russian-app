const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex, score

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  score = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (correct) {
    score++
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    alert('Your score is ' + score + ' out of ' + questions.length)
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Мы были в... (санаторий)',
    answers: [
      { text: 'санатории', correct: true },
      { text: 'санатория', correct: false },
      { text: 'санаторие', correct: false },
      { text: 'санаторий', correct: false }
    ]
  },
  {
    question: 'Они сидят в... (аудитория)',
    answers: [
      { text: 'аудитории', correct: true },
      { text: 'аудитория', correct: false },
      { text: 'аудиторие', correct: false },
      { text: 'аудиторий', correct: false }
    ]
  },
  {
    question: 'Он живет в... (общежитие)',
    answers: [
      { text: 'общежитие', correct: false },
      { text: 'общежитии', correct: true },
      { text: 'общежития', correct: false },
      { text: 'общежитий', correct: false }
    ]
  },
  {
    question: 'Твоя куртка в... (шкаф)',
    answers: [
      { text: 'шкафи', correct: false },
      { text: 'шкафу', correct: true },
      { text: 'шкафе', correct: false },
      { text: 'шкафы', correct: false }
    ]
  },
  {
    question: 'Стол стоит в... (угол)',
    answers: [
      { text: 'угле', correct: false },
      { text: 'углу', correct: true },
      { text: 'углы', correct: false },
      { text: 'угла', correct: false }
    ]
  },
  {
    question: 'Мальчики играют на... (пол)',
    answers: [
      { text: 'полы', correct: false },
      { text: 'пола', correct: false },
      { text: 'поли', correct: false },
      { text: 'полу', correct: true }
    ]
  },
  {
    question: 'Моя мама отдыхает в... (сад)',
    answers: [
      { text: 'сады', correct: false },
      { text: 'сади', correct: false },
      { text: 'саду', correct: true },
      { text: 'сада', correct: false }
    ]
  },
  {
    question: 'Они стояли в... (лес)',
    answers: [
      { text: 'леси', correct: false },
      { text: 'лесы', correct: false },
      { text: 'леса', correct: false },
      { text: 'лесу', correct: true }
    ]
  },
  {
    question: 'Мой папа отдыхает на...(берег)',
    answers: [
      { text: 'берегу', correct: true },
      { text: 'берега', correct: false },
      { text: 'береги', correct: false },
      { text: 'берега', correct: false }
    ]
  },
  {
    question: 'Она стояла на... (мост)',
    answers: [
      { text: 'мосты', correct: false },
      { text: 'моста', correct: false },
      { text: 'мосту', correct: true },
      { text: 'мости', correct: false }
    ]
  }
]