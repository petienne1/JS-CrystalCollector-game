console.log("this has loaded");
var wins = 0;
var losses = 0;
var userScore = 0;
var targetNumber = 0;

var crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },
  clear:
  {
    name: "Clear",
    value: 0
  },
  darkBlue:
  {
    name: "Dark Blue",
    value: 0
  },
  ruby:
  {
    name: "Ruby",
    value: 0
  }
};

// Create function to get random number
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to run when page loads ...Start game - Reset function
// reset user score and target number back to zero. generate a new target score
var reset = function() {
  userScore = 0;
  document.querySelector("#user-score").innerHTML = userScore;
  targetNumber = getRandom(19, 120);
  updateTargetNumber();
  generateCrystalValues();
}
// Create a function that will populate the DOM with the target number that the user has to add up to
var updateTargetNumber = function() {
  // console.log("Updated Target Number: ", targetNumber);
  document.querySelector("#target-number").innerHTML = targetNumber;
};


// Creating a function that will randomly assign values to each crystal
var generateCrystalValues = function() {
  crystal.blue.value = getRandom(1, 12);
  crystal.clear.value = getRandom(1, 12);
  crystal.darkBlue.value = getRandom(1, 12);
  crystal.ruby.value = getRandom(1, 12);
  console.log(crystal.darkBlue.value);
};


// This function will capture the clicks on blue crystal & set random value
document.getElementById('blue').addEventListener('click', function() {
  userScore += crystal.blue.value;
  document.querySelector("#user-score").innerHTML = userScore;
  checkScore(userScore);
});
// This function will capture the clicks on clear crystal & set random value
document.getElementById('clear').addEventListener('click', function() {
  userScore += crystal.clear.value;
  document.querySelector("#user-score").innerHTML = userScore;
  checkScore(userScore);
});
// This function will capture the clicks on darkBlue crystal & set random value
document.getElementById('darkBlue').addEventListener('click', function() {
  userScore += crystal.darkBlue.value;
  console.log(userScore);
  document.querySelector("#user-score").innerHTML = userScore;
  checkScore(userScore);
});
// This function will capture the clicks on ruby crystal & set random value
document.getElementById('ruby').addEventListener('click', function() {
  userScore += crystal.ruby.value;
  document.querySelector("#user-score").innerHTML = userScore;
  checkScore(userScore);
});

// Create functions to update the values on the page
var updateWins = function() {
  wins++;
  document.querySelector("#wins").innerHTML = wins;
};

var updateLosses = function() {
  losses++;
  document.querySelector("#losses").innerHTML = losses;
};
// append user score to the screen
// Create funtion to check Score
function checkScore(userScore) {
  if(userScore === targetNumber) {
    // console.log("Wins: ", wins);
    // target the HTML using querySelector and update the wins
    updateWins();
    reset();
  } else if(userScore > targetNumber) {
    updateLosses();
    reset();
  }
};
// Logic
// console.log("User Score: ", userScore);
// console.log("Target Number: ", targetNumber);
//
//
// if(userScore > targetNumber) {
//   updateLosses();
//   console.log("Losses: ", losses);
// };
// if(userScore > targetNumber) {
//   updateLosses();
//   reset();
// };

// reset screen so that user score is equal to zero & new target targetNumber
reset();
