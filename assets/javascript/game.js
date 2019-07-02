
// Creating the variable that gives the random number that the user is trying to achieve
var targetNumber = [Math.floor(Math.random() * 120)];

$("#current-score").text(targetNumber);


// Creating variables that set the value of the crystals
var greenVal = [Math.floor(Math.random() * 12)];
var redVal = [Math.floor(Math.random() * 12)];
var blueVal = [Math.floor(Math.random() * 12)];
var purpVal = [Math.floor(Math.random() * 12)];

// Create variables to display wins and losses
var wins = 0;
$("wins").text(wins);
var losses = 0;
$("losses").text(losses);


// Diplays the players current total score
var currentTotal = 0;

var greenRup = $("<img>");

// add classes to the rupee images so that css can take effect
greenRup.addClass("rupee-image");
redRup.addClass("rupee-image");
blueRup.addClass("rupee-image");
purpRup.addClass("rupee-image");

// adding src links for the images
greenRup.attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzLGidcb40vKsH-Omfy3Ayrdh2WZOiBB3h6OD4Y146r7trgcw");

greenRup.attr("data-rupeeValue", greenVal);

$("#crystals").append(greenRup);



// Creating click event
$(".rupee-image").on("click", function(){

});




