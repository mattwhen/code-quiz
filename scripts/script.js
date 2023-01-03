// Declare variables here
var startBtn = document.getElementById("start-button"); 
var containerEl = document.querySelector(".content");
var timerEl = document.querySelector('#timer');

// Declare questions and initialize objects stored in a array.
var questions = [
   {
        "question": "What's 2 + 2?",
        "choices": ["a", "b", "c", "d"],
        "answer": "b"
    }, 

    {
        "question": "What color is the sky?",
        "choices": ["a", "b", "c", "d"],
        "answer": "c"
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
var timer = 3;

// Start the quiz upon click and display the first question along with the countdown timer. 
function startGame() {
    // Clears existing content that was in container before clicking "Start" button. 
   containerEl.innerHTML = "";

    // Create timer element and append to the the content container
    var createQuestion = document.createElement("div");

    // Call the countDown function using the setInterval() method, every second. 
    var timeInterval = setInterval(countdownTimer, 1000);

    // When called, will begin countdown timer and will reflect changes on screen. 
    function countdownTimer() {
    var createTimerSpan = document.createElement("div");
    createTimerSpan.setAttribute("id", "timer");
    createTimerSpan.textContent = "Timer: " + timer;
    containerEl.appendChild(createTimerSpan); 

    // When timer reaches 0, it will clear timer. 
      if (timer === 0) {
        clearInterval(timeInterval);
    }
    timer--; 
};

};

