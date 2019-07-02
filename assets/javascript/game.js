
// Creating the variable that gives the random number that the user is trying to achieve
var targetNumber = [Math.floor(Math.random() * 120)];

$("#target-score").text(targetNumber);

// Creating a variable that displays the users current score
var currentScore = 0;

$("#current-score").text(currentScore);


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

// adding src links for the images and displaying them
greenRup.attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzLGidcb40vKsH-Omfy3Ayrdh2WZOiBB3h6OD4Y146r7trgcw");

greenRup.attr("data-rupeeValue", greenVal);

$("#rupees").append(greenRup);



// Creating click event
$(".rupee-image").on("click", function(){

    var rupeeValue = ($(this).attr("data-rupeeValue"));
    rupeeValue = parseInt(rupeeValue);

// every time a rupee is clicked, the value is added to the current score
    currentScore += rupeeValue;

    if (currentScore === targetNumber){
        alert("Congratulations! You're a Winner!");
        wins ++;
    }

    else if (currentScore >= targetNumber) {
        alert("You lose! Try again!");
        losses ++;
    }

});




