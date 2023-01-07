// Declare variables here
var startBtn = document.getElementById("start-button"); 
var contentEl = document.querySelector(".content");
var containerEl = document.querySelector("#container");
var questionDiv = document.querySelector("#question-content");
var btnContainer = document.querySelector("#button-container");
var timerEl = document.querySelector('#timer');

// Declare questions and initialize objects stored in a array.
var questionsArr = [
   {
        "question": "What's 2 + 2?",
        "choices": ["6", "5", "4", "3"],
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
    var timer = 60;

    // Declare variable that subtracts 5 seconds from the timer variable if user selects the wrong answer.
    var penaltyTime = 5; 

    // Start the quiz upon click and display the first question along with the countdown timer. 
    function startGame() {

    // Clears existing content that was in container before clicking "Start" button. 
   contentEl.innerHTML = "";

    // Create timer element and append to the the content container
    var createTimer = document.createElement("div");


    // Call the countDown function using the setInterval() method, every second. 
    var timeInterval = setInterval(startTimer, 1000);

    // When called, will begin countdown timer and show it in the container. 
        function startTimer() {
            document.querySelector(".content").setAttribute("style", "font-size: 30px; font-family: var(--font-fam);");   
            document.querySelector(".content").setAttribute("id", "countdown-timer");   
            createTimer.textContent = "Timer: " + timer;
            contentEl.appendChild(createTimer);

    // When timer reaches 0, it will clear timer. 
      if (timer <= 0) {
        contentEl.innerHTML = "";
        contentEl.textContent = "Time's up! Your answers have been submitted.";
        clearInterval(timeInterval);
    }
    timer--; 
};
    renderQuestion(); 
};

function renderQuestion() {
    var createUl = document.createElement('ul');
    createUl.textContent = questionsArr[0].question; 
    contentEl.appendChild(createUl); 
    

    // Render choice button
    for (var i = 0; i <= questionsArr.length; i++) {
        var createChoices = document.createElement('button');
            createChoices.setAttribute('class', 'choice-options')
            createChoices.textContent = questionsArr[0].choices[i];

            createChoices.addEventListener('click', function(event) {

                if(event.target.innerHTML == 6) {
                    console.log("Correct!");
                    console.log(event.target.tagName);
                    var createDiv = document.createElement('div');
                    createDiv.textContent = "Correct!"; 
                    createUl.appendChild(createDiv);
                    
                }

                else {
                    var createDiv = document.createElement('div');
                    createDiv.textContent = "Wrong!";
                    createUl.appendChild(createDiv);
                    timer -= penaltyTime; // Subtracts 5 seconds from remaining time left on every wrong selection. 
                }
                    console.log(event.target.innerHTML);


            })

            createUl.appendChild(createChoices);
        }
};



