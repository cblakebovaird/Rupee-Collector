
// Creating the variable that gives the random number that the user is trying to achieve
var targetNumber = [Math.floor(Math.random() * 101)+19];

// Creating a variable that displays the users current score
var currentScore = 0;

// Creating variables that set the value of the crystals
var greenVal = Math.floor(Math.random() * 11)+1;
var redVal = Math.floor(Math.random() * 11)+1;
var blueVal = Math.floor(Math.random() * 11)+1;
var purpleVal = Math.floor(Math.random() * 11)+1;

// Create variables to display wins and losses
var wins = 0;
var losses = 0;

// Diplays the players current total score
var currentTotal = 0;

// creating a reset function
function reset(){
targetNumber = Math.floor(Math.random() * 101)+19;    
greenVal = Math.floor(Math.random() * 11)+1;
redVal = Math.floor(Math.random() * 11)+1;
blueVal = Math.floor(Math.random() * 11)+1;
purpVal = Math.floor(Math.random() * 11)+1;
currentScore = 0;
$("#target-score").text(targetNumber);
$("#current-score").text(currentScore);
$("#losses").text("Losses: " + losses);
$("#wins").text("Wins: " + wins);


;}

$(document).ready(function () {

// displaying scores
$("#target-score").text(targetNumber);
$("#current-score").text(currentScore);

// Creating click events
$("#green").on("click", function(){
console.log("currentScore" + typeof currentScore);
console.log("green val" + typeof greenVal);
    currentScore += greenVal;
    var rupeeValue = ($(this).attr("data-rupeevalue"));
    rupeeValue = parseInt(rupeeValue);
    console.log(currentScore);
    $("#current-score").text(currentScore);

 });   
 $("#red").on("click", function(){

    currentScore += redVal;
    var rupeeValue = ($(this).attr("data-rupeevalue"));
    rupeeValue = parseInt(rupeeValue);
    console.log(currentScore);
    $("#current-score").text(currentScore);

 });   

 $("#blue").on("click", function(){

    currentScore += blueVal;
    var rupeeValue = ($(this).attr("data-rupeevalue"));
    rupeeValue = parseInt(rupeeValue);
    console.log(currentScore);
    $("#current-score").text(currentScore);

 });   

 $("#purple").on("click", function(){

    currentScore += purpleVal;
    var rupeeValue = ($(this).attr("data-rupeevalue"));
    rupeeValue = parseInt(rupeeValue);
    console.log(currentScore);
    $("#current-score").text(currentScore);

 });   



 $(".rupees").on("click", function(){

if (currentScore == targetNumber){
        alert("Congratulations! You're a Winner!");
        wins ++;
        $("#wins").text(wins);
        wins = parseInt(wins);
        reset();
    }

    else if (currentScore > targetNumber) {
        alert("You lose! Try again!");
        losses ++;
        $("#losses").text(losses);
        losses = parseInt(losses);
        reset();

    }



 });

    
    




});

