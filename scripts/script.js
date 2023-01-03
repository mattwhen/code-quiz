// Declare variables here
var startBtn = document.getElementById("start-button"); 
var containerEl = document.querySelector(".content");
var timerEl = document.querySelector('#timer');


// Add event listener to 'Start' button.
startBtn.addEventListener("click", startGame);

// Declare countdown timer variable.
var timer = 60;

// Start the game upon click and clear existing content in container. 
function startGame() {
    // Add text content to modify timer 
   containerEl.innerHTML = "";
    // Create timer and append to the the content container

   // Call this function every second
    var timeInterval = setInterval(countdownTimer, 1000);
};

// When called, will begin countdown timer and will reflect changes on screen. 
function countdownTimer() {
    
    console.log(timer);
    timer--; 

    if (timer === 0) {
        clearInterval(); }

};
