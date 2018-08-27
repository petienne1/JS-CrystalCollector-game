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
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to run when page loads ...Start game - Reset function
// reset user score and target number back to zero. generate a new target score
var reset = function() {
  wins = 0;
  losses = 0;
  userScore = 0;
  targetNumber = 0;
}

targetScore = getRandom(19, 120);

// Create functions to update the values on the page
var updateWins = function() {
  wins++;
};

var updateLosses = function() {
  losses++;
};

// var updateUserScore = function() {
//   userScore +=
// };

crystal.blue.value = getRandom(1 -12);
crystal.clear.value = getRandom(1 -12);
crystal.darkBlue.value = getRandom(1 -12);
crystal.ruby.value = getRandom(1 -12);

// This function will capture the clicks on blue crystal & set random value
document.getElementById('blue').addEventListener('click', function() {
  userScore += crystal.blue.value = getRandom(1 -12);
});
// This function will capture the clicks on clear crystal & set random value
document.getElementById('clear').addEventListener('click', function() {
  userScore += crystal.clear.value = getRandom(1 -12);
});
// This function will capture the clicks on darkBlue crystal & set random value
document.getElementById('darkBlue').addEventListener('click', function() {
  userScore += crystal.darkBlue.value = getRandom(1 -12);
});
// This function will capture the clicks on ruby crystal & set random value
document.getElementById('ruby').addEventListener('click', function() {
  userScore += crystal.ruby.value = getRandom(1 -12);
});

// append user score to the screen

// Logic
if(userScore === targetScore) {
  updateWins();
}

if(userScore > targetScore) {
  updateLosses();
}

// reset screen so that user score is equal to zero & new target targetNumber

reset();
