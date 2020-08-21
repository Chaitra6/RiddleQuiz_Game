function generateRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function changeTextColor() {
  h1.style.color = generateRandomColor();
}

function checkBg() {
  generateRandomColor();
  changeTextColor();
}
setInterval(checkBg, 1000);

(function () {
  // Functions
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for (letter in currentQuestion.answers) {

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }



  const score = document.getElementById('score');

  function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;
    let scores = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {

        numCorrect++;
        scores += 50;
        score.innerHTML = scores;
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else {

        scores -= 20;
        score.innerHTML = scores;
        answerContainers[questionNumber].style.color = 'red';

      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = 'none';
    } else {
      previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    } else {
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');

  const myQuestions = [{
      question: "What kind of cup doesn't hold water?",
      answers: {
        a: "Tea Cup",
        b: "Cup Cake"
      },
      correctAnswer: "b"
    },
    {
      question: "Which side of a cat has the most fur?",
      answers: {
        a: "Outside",
        b: "Tail"
      },
      correctAnswer: "a"
    },
    {
      question: "The shorter I am, the bigger I am. What am I?",
      answers: {
        a: "Anger",
        b: "Love"
      },
      correctAnswer: "a"
    },

    {
      question: "What is a Mummy's favorite type of music?",
      answers: {
        a: "Jazz",
        b: "Wrap"
      },
      correctAnswer: "b"
    },
    {
      question: "What can you catch but not throw?",
      answers: {
        a: "Cold",
        b: "Foot Ball"
      },
      correctAnswer: "a"
    },
    {
      question: "What do you get if you put a radio in the fridge?",
      answers: {
        a: "Broken Music",
        b: "Cool Music"
      },
      correctAnswer: "b"
    },
    {
      question: "What gets broken without being hold?",
      answers: {
        a: "Promise",
        b: "Plate"
      },
      correctAnswer: "a"
    },
    {
      question: "What type of house weighs the least?",
      answers: {
        a: "Light House",
        b: "Small House"
      },
      correctAnswer: "a"
    },
    {
      question: "What kind of room doesn't have physical walls?",
      answers: {
        a: "Open Room",
        b: "Chat Room"
      },
      correctAnswer: "b"
    },
    {
      question: "What kind of room has no doors or windows?",
      answers: {
        a: "Mushroom",
        b: "Groom"
      },
      correctAnswer: "a"
    },
    {
      question: "What goes up and down without moving?",
      answers: {
        a: "Snail",
        b: "Stairs"
      },
      correctAnswer: "b"
    },
    {
      question: "What has a foot but no leg?",
      answers: {
        a: "Ruler",
        b: "FootHill"
      },
      correctAnswer: "a"
    },
    {
      question: "What kind of street does a ghost like best?",
      answers: {
        a: "Dead End",
        b: "Ghost Street"
      },
      correctAnswer: "a"
    },
    {
      question: "What has to be broken before you can use it?",
      answers: {
        a: "Fruit",
        b: "Egg"
      },
      correctAnswer: "b"
    },
    {
      question: "Which bow can't be tied?",
      answers: {
        a: "Elbow",
        b: "Rainbow"
      },
      correctAnswer: "b"
    },
    {
      question: "I shave several times a day, yet I still have a beard. Who am I?",
      answers: {
        a: "Beard",
        b: "Barber"
      },
      correctAnswer: "b"
    },
    {
      question: "I give milk and have a horn but I'm not a cow. Who am I?",
      answers: {
        a: "Milk Truck",
        b: "Milk Man"
      },
      correctAnswer: "a"
    },
    {
      question: "What do you call two witches who live together?",
      answers: {
        a: "Classmates",
        b: "Broomates"
      },
      correctAnswer: "b"
    },
    {
      question: "What is never eaten before lunch?",
      answers: {
        a: "Breakfast",
        b: "Dinner"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the largest living ant on earth?",
      answers: {
        a: "Elephant",
        b: "Restaurant"
      },
      correctAnswer: "a"
    }

  ];

  buildQuiz();


  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();