// Declare Variables
var wins = 0;
var losses = 0;
var userScore = 0;
var targetNumber = 0;

const crystals = {
  ruby:{
    name: "Ruby",
    value: 0
  },
  blue:{
    name: "Blue",
    value: 0
  },
  darkBlue:{
    name: "Dark Blue",
    value: 0
  },
  diamond:{
    name: "Diamond",
    value: 0
  }
};
// Create functionality:
// generate random number
const getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// display Target Number on screen
const displayTargetNumber = function() {
  document.querySelector("#target-number").innerHTML = targetNumber;
};
// generate crystal values
const generateCrystalValues = function() {
  crystals.ruby.value = getRandom(1, 12);
  crystals.blue.value = getRandom(1, 12);
  crystals.darkBlue.value = getRandom(1, 12);
  crystals.diamond.value = getRandom(1, 12);
};
// Start Game: Generate a random number and set it as Target Number
const reset = function() {
  // set User Score to zero
  userScore = 0;
  // display User Score on html page
  document.querySelector("#user-score").innerHTML = userScore;
  // generate a random Target Number
  targetNumber = getRandom(19, 120);
  // update Target Number on screen
  displayTargetNumber();
  generateCrystalValues();
};
// This function will capture the clicks on ruby crystal & set random value
document.getElementById('ruby').addEventListener('click', function() {
  // update User Score
  userScore += crystals.ruby.value;
  // display new User Score on screen
  document.querySelector("#user-score").innerHTML = userScore;
  checkScore(userScore);
});
// This function will capture the clicks on blue crystal & set random value
document.getElementById('blue').addEventListener('click', function() {
  userScore += crystals.blue.value;
  document.querySelector("#user-score").innerHTML = userScore;
  checkScore(userScore);
});
// This function will capture the clicks on darkBlue crystal & set random value
document.getElementById('darkBlue').addEventListener('click', function() {
  userScore += crystals.darkBlue.value;
  document.querySelector("#user-score").innerHTML = userScore;
  checkScore(userScore);
});
// This function will capture the clicks on diamond crystal & set random value
document.getElementById('diamond').addEventListener('click', function() {
  userScore += crystal.diamond.value;
  document.querySelector("#user-score").innerHTML = userScore;
  checkScore(userScore);

// Create functions to update the values on the page
  var updateWins = function() {
    wins++;
    document.querySelector("#wins").innerHTML = wins;
  };

  var updateLosses = function() {
    losses++;
    document.querySelector("#losses").innerHTML = losses;
  };
// Write Logic

// if User Score is equal to Target Number increment wins total, reset game
const checkScore = function(userScore) {
  if(userScore === targetNumber) {
    wins++;
    reset();
  // if User Score is greater than the Target Number increment losses total
  } else if(userScore > targetNumber) {
    losses++;
    reset();
  }
};

// reset screen so that the User Score is equal to zero & new target targetNumber
reset();
