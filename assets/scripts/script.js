// Declare variables here
var startBtn = document.getElementById("start-button"); 
var contentEl = document.querySelector(".content");
var containerEl = document.querySelector("#container");
var questionDiv = document.querySelector("#question-content");
var btnContainer = document.querySelector("#button-container");
var timerEl = document.querySelector('#timer');


// Set index for questionsArr to 0.
var questionIndex = 0;

// Declare questions and initialize objects stored in a array.
var questionsArr = [
   {
        "question": "What's 2 + 2?",
        "choices": ["6", "5", "4", "3"],
        "answer": "4"
    }, 

    {
        "question": "What color is the sky?",
        "choices": ["red", "blue", "orange", "black"],
        "answer": "blue"
    },

    {
        "question": "How many letters are in the English alphabet?",
        "choices": ["a", "b", "c", "d"],
        "answer": "d"
    }
];

    // Add event listener to 'Start' button.
    startBtn.addEventListener("click", startGame);

    // Declare countdown timer variable.
    var timer = 60;

    // Declare clearInterval
    var timeInterval;

    // Declare variable that subtracts 5 seconds from the timer variable if user selects the wrong answer.
    var penaltyTime = 5; 

    // Start the quiz upon click and display the first question along with the countdown timer. 
    function startGame() {

    // Clears existing content that was in container before clicking "Start" button. 
   contentEl.innerHTML = "";

    // Create timer element and append to the the content container
    var createTimer = document.createElement("div");


    // Call the countDown function using the setInterval() method, every second. 
     timeInterval = setInterval(startTimer, 1000);

    // When called, will begin countdown timer and show it in the container. 
        function startTimer() {
            document.querySelector(".content").setAttribute("id", "countdown-timer");   
            createTimer.textContent = "Timer: " + timer;
            contentEl.appendChild(createTimer);

    // When timer reaches 0, it will clear timer. 
      if (timer <= 0) {
        contentEl.innerHTML = "";
        contentEl.textContent = "Time's up! Your answers have been submitted.";
        contentEl.textContent = "Time's up! Your answers have been submitted." + " Your score is: " + timer;

        clearInterval(timeInterval);
    }
    timer--; 
};
    renderQuestion(); 
};

function renderQuestion() {
    contentEl.innerHTML = "";
    var createUl = document.createElement('ul');
    createUl.textContent = questionsArr[questionIndex].question; 
    contentEl.appendChild(createUl); 
    

    // Render choice button
    for (var i = 0; i <= questionsArr.length; i++) {
        var createChoices = document.createElement('button');
            createChoices.setAttribute('class', 'choice-options')
            createChoices.textContent = questionsArr[questionIndex].choices[i];

            createChoices.addEventListener('click', function(event) {
                var newDiv = document.createElement('div');

                if(event.target.textContent == questionsArr[questionIndex].answer) {
                    var createDiv = document.createElement('div');
                    createDiv.textContent = "Correct!"; 
                    newDiv.appendChild(createDiv);
                    questionIndex++; // Increment questionIndex to go through entire length of questionsArr.

                    if (questionIndex >= questionsArr.length) {
                        contentEl.innerHTML = "";
                        contentEl.textContent = 'Your answers have been submitted, your score is: ' + timer;
                        clearInterval(timeInterval);
                        return; 
                    }

                    else {
                        renderQuestion();
                    }
                }

                else {
                    var createDiv = document.createElement('div');
                    createDiv.textContent = "Incorrect! Try again!";
                    newDiv.appendChild(createDiv);
                    timer -= penaltyTime; // Subtracts 5 seconds from remaining time left on every wrong selection. 
                }
                createUl.appendChild(newDiv);
                /* Clears newDiv element that appears on screen after selecting a right or wrong answer
                after 2 seconds */ 
                setTimeout(function() {
                    newDiv.innerHTML = "";

                }, 2000)
            })

            createUl.appendChild(createChoices);
        }
};



// Local storage 
/*
const users = {
    score: 50,
    initial: 'jh'
}

localStorage.setItem("my-key", JSON.stringify(users))

const myUsers = localStorage.getItem('my-key');
console.log(myUsers);
console.log(typeof myUsers);
const myUsersParsed = JSON.parse(myUsers);
console.log(myUsersParsed)
*/ 